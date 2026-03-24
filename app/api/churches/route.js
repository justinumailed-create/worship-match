import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { milesBetween, resolveZipLocation } from '@/lib/churches';

/**
 * POST /api/churches
 * Handles registration of new sanctuaries
 */
export async function POST(request) {
  try {
    const body = await request.json();
    
    const requiredFields = ['church_name', 'pastor_name', 'email', 'zip_code'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const churchData = {
      church_name: body.church_name,
      pastor_name: body.pastor_name,
      email: body.email,
      phone: body.phone || null,
      address: body.address || null,
      city: body.city || null,
      state: body.state || null,
      zip_code: body.zip_code,
      denomination: body.denomination || null,
      worship_style: body.worship_style || null,
      church_size: body.church_size || null,
      ministries: body.ministries || [],
      accessibility: body.accessibility || []
    };

    const { data, error } = await supabase
      .from('churches')
      .insert([churchData])
      .select()
      .single();

    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json({ error: 'Database insertion failed' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Church live', data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * GET /api/churches
 * Handles discovery and matching logic
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  // 1. Extract Preferences
  const pref = {
    zip: searchParams.get('zip_code') || searchParams.get('zip'), // support both formats
    radius: Number(searchParams.get('radius') || 25),
    denomination: searchParams.get('denomination'),
    worshipStyle: searchParams.get('worship_style') || searchParams.get('worship'),
    ministries: searchParams.getAll('ministries'),
    accessibility: searchParams.getAll('accessibility')
  };

  // 2. Fetch all active sanctuaries
  const { data: churches, error } = await supabase
    .from('churches')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const userLocation = resolveZipLocation(pref.zip);

  // 3. Matching Engine (Scoring Algorithm)
  const scoredChurches = churches.map(church => {
    let score = 0;
    const reasons = [];
    
    // A. Zip Proximity
    const churchLocation = resolveZipLocation(church.zip_code);
    if (church.zip_code === pref.zip) {
      score += 50;
      reasons.push("Exact location match");
    } else if (userLocation && churchLocation) {
      const distance = milesBetween(userLocation.lat, userLocation.lng, churchLocation.lat, churchLocation.lng);
      if (distance <= pref.radius) {
        score += 30;
        reasons.push(`Within ${Math.round(distance)} miles`);
      }
    }

    // B. Denomination Match
    if (pref.denomination && church.denomination === pref.denomination) {
      score += 20;
      reasons.push(`Matches ${church.denomination} preference`);
    }

    // C. Worship Style Match
    if (pref.worshipStyle && church.worship_style === pref.worshipStyle) {
      score += 20;
      reasons.push(`${church.worship_style} worship style`);
    }

    // D. Ministries (Each +10)
    if (pref.ministries.length > 0 && church.ministries) {
      const matches = pref.ministries.filter(m => church.ministries.includes(m));
      if (matches.length > 0) {
        score += (matches.length * 10);
        reasons.push(`Matches ministries: ${matches.slice(0, 2).join(', ')}`);
      }
    }

    // E. Accessibility Match (+10)
    if (pref.accessibility.length > 0 && church.accessibility) {
      const matches = pref.accessibility.filter(a => church.accessibility.includes(a));
      if (matches.length > 0) {
        score += 10;
        reasons.push("Accessibility alignment");
      }
    }

    // Calculate a display percentage (based on a reasonable max score of 150)
    const matchPercent = Math.min(100, Math.round((score / 150) * 100));

    // Map DB fields to Component expectations
    return { 
      ...church, 
      name: church.church_name,
      pastor: church.pastor_name,
      worshipStyle: church.worship_style,
      match_score: score,
      matchPercent,
      reasons: reasons.slice(0, 3)
    };
  });

  // 4. Sort and Return
  scoredChurches.sort((a, b) => b.match_score - a.match_score);

  return NextResponse.json(scoredChurches);
}
