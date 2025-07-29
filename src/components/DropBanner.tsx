import React from "react";
import "./DropBanner.css";
import Timer from "./Timer";

const DropBanner: React.FC = () => {
  return (
    <div className="drop-banner">
      <div className="drop-banner-content">
        <h1>Lion of Judah Collection</h1>
        <Timer initialTimerValueSeconds={68069}/>
        <button className="drop-buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default DropBanner;
