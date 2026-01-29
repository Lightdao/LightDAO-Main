import React from "react";
import "./CollectionsBanner.css";

const CollectionsBanner: React.FC = () => {
  return (
    <div className="collections-banner">
      <img
        src="/path/to/banner.jpg"
        alt="Banner"
        className="collections-banner-image"
      />
      <h1>8SIAN Main Collection</h1>
      <div className="collections-stats">
        <span>8K Items</span>
        <span>2.5K Owners</span>
        <span>3.2K Volume Traded</span>
        <span>5.4K Likes</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet varius quam, nec convallis arcu.
      </p>
    </div>
  );
};

export default CollectionsBanner;
