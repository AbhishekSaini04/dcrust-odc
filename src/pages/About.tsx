import React from 'react';
import '../styles/About.css';
import dcrustLogo from '../assets/images/dcrust-img1.jpg';
import dcrustLogo2 from '../assets/images/dcrust-img2.jpg';
import dcrustLogo3 from '../assets/images/dcrust-img3.png';
import Carousel from '../components/Carousel';
// import DCRUST from "../assets/images/dcrust-img1.jpg";

// Dynamically import images for Vite compatibility
const images = [
  new URL('../assets/images/dcrust-img1.jpg', import.meta.url).href,
  new URL('../assets/images/dcrust-img2.jpg', import.meta.url).href,
  new URL('../assets/images/dcrust-img3.png', import.meta.url).href
];

const About = () => {
  return (
    <section className="about-section about-section-light" id="about">
      <div className="about-flex-container">
        <div className="about-card">
          <Carousel images={images} />
        </div>
        <div className="about-card-content">
          <h2 className="about-card-title">About Us</h2>
          <p className="about-card-text">
          DCRUST (Deenbandhu Chhotu Ram University of Science and Technology) is a state university in Sonipat, Haryana, established in <b>1986</b>. Despite its technical background, no student had ever qualified for Google Summer of Code (GSoC).
          </p>
          <p className="about-card-text">
          To change this, a student-led open-source community was founded in March 2023 by <b>Sambhav Saxena</b> and team. With 1000+ members, it now helps students explore open source, hackathons, and GSoC.
          </p>
          <button className="about-card-btn">
            Know More <span className="about-card-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;