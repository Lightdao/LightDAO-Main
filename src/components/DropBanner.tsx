import React from "react";
import "./DropBanner.css";

const DropBanner: React.FC = () => {
  return (
    <div className="drop-banner">
      <div className="drop-banner-content">
        <h1>Lion of Judah Collection</h1>
        <p>Ends in: 5d 12h 34m</p>
        <button className="drop-buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default DropBanner;
