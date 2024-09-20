import React from 'react';
import Navbar from '../components/Navbar';
import backgroundVideo from '../assets/background1.mp4'; // Import the video

function FrontLanding() {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="title">Welcome to Our Website</h1>
        <p className="subtitle">We're glad you're here choose your favourite color and make the glory.</p>
      </div>
    </div>
    </>
    
  );
}

export default FrontLanding;
