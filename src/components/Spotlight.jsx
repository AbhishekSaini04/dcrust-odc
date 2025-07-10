import React from 'react';
import './Spotlight.css';

const Spotlight = ({ width = '60vw', height = '80px', className = '' }) => {
  return (
    <div
      className={`spotlight-effect ${className}`}
      style={{ width, height }}
    />
  );
};

export default Spotlight; 