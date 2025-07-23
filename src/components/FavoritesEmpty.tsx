import React from 'react';
import './FavoritesEmpty.css';

const FavoritesEmpty: React.FC = () => {
  return (
    <div className="favorites-empty">
        <h1>Favorites</h1>
        <div className="empty-state">
          <img  className="empty-state-image" src="/emptyfavorites.png" alt="empty favorites image" />
          <h4>Favorite items not found</h4>
          <div className="suggestion">Try to assign more tasks to your employees or create a new project from scratch</div>
          <button className="explore-button">Explore NFTs</button>
        </div>
    </div>
  );
};

export default FavoritesEmpty;
