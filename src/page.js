'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { generateMembers, marketingZones } from '../../utils/generateData';

// Dynamically import Map to avoid SSR issues
const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Home() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Generate 500 fictitious members on load
    setMembers(generateMembers(500));
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ padding: '20px', background: '#1a1a1a', color: 'white' }}>
        <h1 style={{ margin: 0 }}>Grand Casino: Market Expansion Analysis</h1>
        <p style={{ margin: '5px 0 0', opacity: 0.8 }}>
          <span style={{color: '#ff4d4d'}}>● Standard Members</span> | 
          <span style={{color: '#ffd700'}}> ● VIPs</span> | 
          <span style={{color: '#4d79ff'}}> ◯ Target Expansion Zones</span>
        </p>
      </div>
      
      <div style={{ flex: 1, position: 'relative' }}>
        <Map members={members} zones={marketingZones} />
      </div>
    </main>
  );
}
