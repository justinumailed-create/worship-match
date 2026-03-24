/**
 * Church Matching Algorithm
 * Logic to rank churches based on a seeker's preferences and location.
 * 
 * @param {Object} seekerProfile - { zipCode, denomination, worshipStyle, churchSize, ministries: [], accessibility: [] }
 * @param {Array} churchesDatabase - Array of church objects with matching fields.
 * @returns {Array} - Sorted array of churches with an added 'matchScore' property.
 */
export function matchSeekerToChurches(seekerProfile, churchesDatabase) {
  if (!seekerProfile || !Array.isArray(churchesDatabase)) {
    return [];
  }

  // 1. Primary Filter: Hard Match by Zip Code
  // NOTE: In a production environment, you should integrate a geo-radius library 
  // (e.g., 'geolib' or 'node-geocoder') here to allow matches within a X-mile radius.
  const localChurches = churchesDatabase.filter(
    (church) => church.zipCode === seekerProfile.zipCode
  );

  // 2. Secondary Filter: Ranking/Scoring
  const scoredChurches = localChurches.map((church) => {
    let score = 0;

    // Denomination match: +3 points
    if (church.denomination === seekerProfile.denomination) {
      score += 3;
    }

    // Worship Style match: +2 points
    if (church.worshipStyle === seekerProfile.worshipStyle) {
      score += 2;
    }

    // Church Size match: +1 point
    if (church.churchSize === seekerProfile.churchSize) {
      score += 1;
    }

    // Ministries (Array): +1 point for every matching ministry
    if (Array.isArray(church.ministries) && Array.isArray(seekerProfile.ministries)) {
      seekerProfile.ministries.forEach((m) => {
        if (church.ministries.includes(m)) {
          score += 1;
        }
      });
    }

    // Accessibility (Array): +2 points for every matching accessibility feature
    if (Array.isArray(church.accessibility) && Array.isArray(seekerProfile.accessibility)) {
      seekerProfile.accessibility.forEach((a) => {
        if (church.accessibility.includes(a)) {
          score += 2;
        }
      });
    }

    return {
      ...church,
      matchScore: score,
    };
  });

  // Return sorted array (highest score first)
  return scoredChurches.sort((a, b) => b.matchScore - a.matchScore);
}
