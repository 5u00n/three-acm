import React from 'react'
import LOGO from '../assets/logo.png';
import { Image } from '@mantine/core';

export default function Home() {
  return (
    <div style={{}}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Image src={LOGO} alt="Unsplash" style={{ width: '54px' }} />
        <h1 style={{ color: "#213F9A", marginLeft: '10px' }}>3 ANGELS' CALL MINISTRY</h1>
      </div>
      <h2 style={{ textAlign: "center" }}>Youth Volunteering for His cause in the Last Days</h2>

      
    </div>
  )
}
