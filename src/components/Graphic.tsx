import React, { FC } from "react";

interface Graphic {
  wide?: boolean;
}

const Graphic: FC<Graphic> = ({ wide }) => {
  return (
    <div className={`graphic ${wide ? "wide" : ""}`}>
      <div className="caesurae">
        <div className="circle circle-1">
          <div></div>
        </div>
        <div className="duration-1"></div>
        <div className="caesura caesura-1"></div>
        {!wide && (
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
};

export default Graphic;
