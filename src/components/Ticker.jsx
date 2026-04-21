import React from 'react';

const Ticker = () => {
  return (
    <div className="bg-gray-800 text-amber-400 text-sm py-2 overflow-hidden border-b border-amber-600/30">
      <div className="inline-block whitespace-nowrap animate-marquee">
        <span className="mx-4">GOLD $4,749</span> |
        <span className="mx-4">SILVER $74.50</span> |
        <span className="mx-4">GOLD/SILVER RATIO 63.7</span> |
        <span className="mx-4">Central banks accumulating</span> |
        <span className="mx-4">Goldman raises target to $5,400</span>
      </div>
    </div>
  );
};

export default Ticker;
