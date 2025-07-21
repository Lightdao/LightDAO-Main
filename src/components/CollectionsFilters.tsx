import React from "react";
import "./CollectionsFilters.css";

const CollectionsFilters: React.FC = () => {
  return (
    <aside className="collections-filters">
      <div className="collections-filter-row">
        <h2>Filters</h2>
        <button className="collections-filter-btn active">All</button>
        <button className="collections-filter-btn">Trending</button>
        <button className="collections-filter-btn">Collectibles</button>
        <button className="collections-filter-btn">Art</button>
        <button className="collections-filter-btn">Photography</button>
      </div>
    </aside>
  );
};

export default CollectionsFilters;