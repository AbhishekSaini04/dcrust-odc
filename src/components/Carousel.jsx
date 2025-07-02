import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const timeoutRef = useRef(null);

  // Autoplay effect
  useEffect(() => {
    const next = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    timeoutRef.current = setTimeout(next, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, length, interval]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        {images.map((img, idx) => (
          <div
            className={`carousel-slide${idx === current ? ' active' : ''}`}
            key={idx}
          >
            <img
              src={img}
              alt={`carousel-img-${idx}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 