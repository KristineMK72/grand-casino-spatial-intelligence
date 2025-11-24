// utils/generateData.js

// Center point: Grand Casino Mille Lacs approx coordinates
const CASINO_LAT = 46.165;
const CASINO_LNG = -93.75;

// Helper to generate random points within a radius (approximate)
function getRandomLocation(lat, lng, radiusInDegrees) {
  const r = radiusInDegrees * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  return {
    lat: lat + r * Math.cos(theta),
    lng: lng + r * Math.sin(theta),
    spendLevel: Math.random() > 0.8 ? 'VIP' : 'Standard', // 20% are VIPs
  };
}

export const generateMembers = (count) => {
  const members = [];
  for (let i = 0; i < count; i++) {
    // 70% of members are local (within ~15 miles)
    // 30% are "Cabin/Metro" crowd (further out)
    const isLocal = Math.random() > 0.3;
    const centerLat = isLocal ? CASINO_LAT : CASINO_LAT - 0.5; // Shift south for metro
    const spread = isLocal ? 0.2 : 0.8;
    
    members.push({
      id: i,
      ...getRandomLocation(centerLat, CASINO_LNG, spread)
    });
  }
  return members;
};

export const marketingZones = [
  {
    id: 1,
    name: "Brainerd Expansion",
    lat: 46.35,
    lng: -94.20,
    radius: 8000, // meters
    potential: "High Income / Recreation",
    color: "blue"
  },
  {
    id: 2,
    name: "St. Cloud Commuters",
    lat: 45.55,
    lng: -94.16,
    radius: 10000,
    potential: "Weekend Day-Trippers",
    color: "green"
  }
];
