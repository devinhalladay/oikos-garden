import React from 'react';

function Card({ children, animate }) {
  return (
    <div
      className={`indent-0 font-sans shadow-sm pb-0 w-full rounded border border-gray-300 ${
        animate &&
        'transform rotate-0 hover:rotate-1 transition-all duration-300'
      }`}>
      {children}
    </div>
  );
}

export default Card;
