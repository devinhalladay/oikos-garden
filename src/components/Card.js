import React from 'react';

function Card({ children, animate, className }) {
  return (
    <div
      className={`indent-0 h-full font-sans shadow-sm pb-0 w-full rounded-md border border-gray-300 ${
        animate &&
        'transform rotate-0 hover:rotate-1 transition-all duration-300'
      } ${className}`}>
      {children}
    </div>
  );
}

export default Card;
