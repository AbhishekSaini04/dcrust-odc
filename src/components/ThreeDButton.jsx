import React from 'react';

const ThreeDButton = ({ children, className = '', ...props }) => (
  <button
    className={`three-d-btn ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default ThreeDButton; 