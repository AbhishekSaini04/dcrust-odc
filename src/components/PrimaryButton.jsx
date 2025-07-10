import React from 'react';

const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`primary-btn ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton; 