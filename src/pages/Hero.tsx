import React from 'react';
import '../styles/Hero.css';  
import Logo from '../components/logo';
import StatsSection from '../components/StatsSection';
import "../App.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        
        <div className='hero-subtitle'>
         THE
         <span className="hero-title"> OPEN SOURCE</span> 
        </div>
        <h3 className="hero-subtitle">
          COMMUNITY OF 
          <span className='dcrust'>  DCRUST</span>
        </h3>
        <div className="hero-actions">
         
          <p className="hero-description">
           For the first time in history, for students of DCRUST contributing to open source are going to have a community altogether.
           <br />
          <span>DCRUST Open-source Developers Community</span>
          </p>
           <Logo/>
         <StatsSection/>
           
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="hero-bg-gradient">
      
      </div>
     
    </div>
  );
};

export default Hero;
