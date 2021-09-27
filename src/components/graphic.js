import React from 'react';

function Graphic({ layout }) {
  return (
    <div class={`graphic ${layout ? layout : null}`}>
      <div class="caesurae">
        <div class="circle circle-1">
          <div></div>
        </div>
        <div className="duration-1"></div>
        <div class="caesura caesura-1">
          {/* <p>Infinite Caesura • No Place</p> */}
        </div>
        {layout !== 'wide' && (
          <>
            <div className="duration-2"></div>
            <div class="caesura caesura-2"></div>
          </>
        )}
        <div className="duration-3"></div>
        <div class="circle circle-2">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
