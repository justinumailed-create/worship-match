"use client";

import { useState, useEffect } from "react";
import { 
  getApprovedChurches, 
  milesBetween, 
  resolveZipLocation, 
  normalizeMultiValue 
} from "./churches";

const DEFAULT_CHURCHES = getApprovedChurches().map(c => ({ ...c, status: "active" }));

export function getDB() {
  if (typeof window === "undefined") return { churches: DEFAULT_CHURCHES, leads: [] };
  
  const stored = localStorage.getItem("church_demo_db");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse DB", e);
    }
  }
  
  const initial = { churches: DEFAULT_CHURCHES, leads: [] };
  localStorage.setItem("church_demo_db", JSON.stringify(initial));
  return initial;
}

export function saveDB(db) {
  if (typeof window === "undefined") return;
  localStorage.setItem("church_demo_db", JSON.stringify(db));
}

export function addChurch(church) {
  const db = getDB();
  const newChurch = {
    ...church,
    id: `church-${Date.now()}`,
    status: "pending",
    approved: false,
    ministries: church.ministries || [],
    accessibility: church.accessibility || [],
    lat: 33.7490, // Default to Atlanta for demo
    lng: -84.3880
  };
  db.churches.push(newChurch);
  saveDB(db);
  return newChurch;
}

export function approveChurch(id) {
  const db = getDB();
  const church = db.churches.find(c => c.id === id);
  if (church) {
    church.status = "active";
    church.approved = true;
  }
  saveDB(db);
}

export function updateChurch(id, updates) {
  const db = getDB();
  const index = db.churches.findIndex(c => c.id === id);
  if (index !== -1) {
    db.churches[index] = { ...db.churches[index], ...updates };
  }
  saveDB(db);
}

export function addLead(lead) {
  const db = getDB();
  const newLead = {
    ...lead,
    id: `lead-${Date.now()}`,
    timestamp: new Date().toISOString()
  };
  db.leads.push(newLead);
  saveDB(db);
  return newLead;
}

export function scoreChurch(church, preferences, location) {
  let score = 0;
  const reasons = [];

  // Denomination +10
  if (preferences.denomination && church.denomination === preferences.denomination) {
    score += 10;
    reasons.push(`Matches ${church.denomination} preference`);
  }
  
  // Worship +15
  if (preferences.worship && church.worshipStyle === preferences.worship) {
    score += 15;
    reasons.push(`${church.worshipStyle} worship style`);
  }
  
  // Preaching +10
  if (preferences.preaching && church.preachingStyle === preferences.preaching) {
    score += 10;
    reasons.push(`${church.preachingStyle} preaching`);
  }
  
  // Size +10
  if (preferences.size && church.size === preferences.size) {
    score += 10;
    reasons.push(`${church.size} congregation`);
  }

  // Online +10
  if (preferences.online === "yes" && church.online) {
    score += 10;
    reasons.push("Offers online services");
  }

  // Ministries overlap up to +25
  const prefMinistries = normalizeMultiValue(preferences.ministries);
  if (prefMinistries.length > 0) {
    const churchMinistries = church.ministries || [];
    const matches = prefMinistries.filter(m => churchMinistries.includes(m));
    const ministryScore = Math.round((matches.length / prefMinistries.length) * 25);
    score += ministryScore;
    if (matches.length > 0) {
      reasons.push(`Shared ministries: ${matches.slice(0, 2).join(", ")}`);
    }
  }

  const distance = location ? milesBetween(location.lat, location.lng, church.lat, church.lng) : 0;

  return {
    ...church,
    totalScore: score,
    distanceMiles: distance,
    reasons: reasons.slice(0, 2),
    matchPercent: Math.min(100, Math.round((score / 80) * 100))
  };
}
