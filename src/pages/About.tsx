import React from 'react';
import '../styles/About.css';
import AnimatedDots from '../components/AnimatedDots';
import Button from '../components/Button';

const About = () => {
  return (
    <section className="about-section" id="about">
      <AnimatedDots />
      <div className="about-container">
        <h2 className="about-title">
          <span className="normal">ABOUT</span>{" "}
          <span className="normal">US</span>
        </h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="https://image-static.collegedunia.com/public/college_data/images/appImage/25524_cover1.png?h=260&w=360&mode=crop" 
              alt="DCRUST Open Source Community" 
              className="about-image"
            />
            <div className="image-overlay"></div>
          </div>
          
          <div className="about-text">
            <p className="about-description">
              <span className="highlight">DCRUST</span> (Deenbandhu Chhotu Ram University of Science and Technology), a <span className="highlight">state university</span> in Sonipat, Haryana, was founded in <span className="highlight">1986</span> as a technical institute. In <span className="highlight">March 2023</span>, a group of <span className="highlight">10 students</span> led by <span className="highlight">Sambhav Saxena</span> started a community to promote <span className="highlight pink">open source</span> awareness, addressing the lack of <span className="highlight">GSoC</span> selections from the university. With over <span className="highlight">1000 members</span> now, the community aims to guide students—technical and non-technical alike—into <span className="highlight pink">open source</span>, <span className="highlight">hackathons</span>, <span className="highlight">contribution bootcamps</span>, and <span className="highlight">GSoC participation</span>, growing steadily with time.
            </p>
          </div>
          
        </div>
        
      </div>
      <Button content="More About "/>
    </section>
  );
};

export default About;