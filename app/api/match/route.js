import { NextResponse } from 'next/server';
import { matchSeekerToChurches } from '@/lib/matchingLogic';

/**
 * API Route: /api/match
 * Method: POST
 * Description: Processes seeker search requests and returns ranked church matches.
 */
export async function POST(req) {
  try {
    const body = await req.json();
    const { seekerProfile } = body;

    if (!seekerProfile) {
      return NextResponse.json(
        { success: false, error: 'Missing seekerProfile in request body' },
        { status: 400 }
      );
    }

    // Mock Churches Database for Demo
    const churchesDatabase = [
      {
        id: 1,
        churchName: "Doc Kenneth's Church",
        pastorName: "Dr. Kenneth",
        phone: "(555) 123-4567",
        website: "https://dockenneth.org",
        address: "456 Faith Ave, Beverly Hills, CA",
        zipCode: "90210",
        denomination: "Baptist",
        worshipStyle: "Traditional",
        churchSize: "Medium",
        ministries: ["Kids", "Students", "Women"],
        accessibility: ["Wheelchair Accessible", "Hearing Assistance"]
      },
      {
        id: 2,
        churchName: "Grace Community",
        pastorName: "Sarah Miller",
        phone: "(555) 987-6543",
        website: "https://gracecommunity.io",
        address: "789 Grace Way, Beverly Hills, CA",
        zipCode: "90210",
        denomination: "Non-Denominational",
        worshipStyle: "Contemporary",
        churchSize: "Large",
        ministries: ["Young Adult", "Recovery Group"],
        accessibility: ["Wheelchair Accessible", "Sign Language"]
      },
      {
        id: 3,
        churchName: "Out of Area Church",
        pastorName: "John Smith",
        phone: "(555) 000-0000",
        website: "https://outofarea.com",
        address: "123 Far Away St, New York, NY",
        zipCode: "10001",
        denomination: "Pentecostal",
        worshipStyle: "Gospel",
        churchSize: "Small",
        ministries: ["Kids"],
        accessibility: ["Wheelchair Accessible"]
      }
    ];

    // Execute matching logic
    const sortedChurches = matchSeekerToChurches(seekerProfile, churchesDatabase);

    return NextResponse.json({
      success: true,
      matches: sortedChurches
    });

  } catch (error) {
    console.error('Matching API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
