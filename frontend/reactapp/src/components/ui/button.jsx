import React from 'react';

export const Button = ({ children, ...props }) => (
  <button {...props} className="p-2 bg-blue-500 text-white rounded">
    {children}
  </button>
);
