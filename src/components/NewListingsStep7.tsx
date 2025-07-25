import React from 'react';
import './NewListingsStep7.css';
import NewListingTopBar from './NewListingTopBar';

const NewListingsStep7: React.FC = () => {
  return (
    <div className="step7-container">
      <NewListingTopBar />

      {/* Title */}
      <h1 className="title">Ready to publish?</h1>
      <p className="subtitle">
        They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
      </p>

      {/* Preview Card */}
      <div className="preview-card">
        <div className="author-avatar" />
        <div className="artwork" />
        <h6 className="item-title">Capturing Memories</h6>
        <div className="item-price">
          <div className="solana-icon" />
          <span className="price-label">from</span>
          <span className="price-value">7 Sol</span>
        </div>
      </div>

      {/* Publish Button */}
      <button className="publish-button">Publish</button>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
};

export default NewListingsStep7;
