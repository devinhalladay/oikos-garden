import React, { FC } from "react";

interface Graphic {
  layout?: "wide";
}

const Graphic: FC<Graphic> = ({ layout }) => {
  return (
    <div className={`graphic ${layout ? layout : null}`}>
      <div className="caesurae">
        <div className="circle circle-1">
          <div></div>
        </div>
        <div className="duration-1"></div>
        <div className="caesura caesura-1"></div>
        {layout !== "wide" && (
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
