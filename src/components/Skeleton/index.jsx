import React from "react";
import "./style.css";
function Skeleton({ count }) {
  return (
    <div className="skeleton">
      {Array(count)
        .fill()
        .map((_, inx) => (
          <div key={inx} className="skeleton-item">
            <div className="skeleton-img skeleton-animation"></div>
            <div className="skeleton-title skeleton-animation"></div>
            <div className="skeleton-title skeleton-animation"></div>
            <div className="skeleton-title skeleton-animation"></div>
            <div className="skeleton-title skeleton-animation"></div>
            <div className="skeleton-title skeleton-animation"></div>
          </div>
        ))}
    </div>
  );
}

export default Skeleton;
