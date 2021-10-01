import React from 'react';

function Graphic({ layout }) {
  return (
    <div className={`graphic ${layout ? layout : null}`}>
      <div className="caesurae">
        <div className="circle circle-1">
          <div></div>
        </div>
        <div className="duration-1"></div>
        <div className="caesura caesura-1">
          {/* <p>Infinite Caesura • No Place</p> */}
        </div>
        {layout !== 'wide' && (
          <>
            <div className="duration-2"></div>
            <div className="caesura caesura-2"></div>
          </>
        )}
        <div className="duration-3"></div>
        <div className="circle circle-2">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
