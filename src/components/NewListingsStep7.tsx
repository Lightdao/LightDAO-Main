import React from 'react';
import './NewListingsStep7.css';
import NewListingTopBar from './NewListingTopBar';

const NewListingsStep7: React.FC = () => {
  return (
    <div className="step7-container">
      <NewListingTopBar />

      {/* Title */}
      <div className="step7-title">
        <h1 className="new-listing-title">Ready to publish?</h1>
        <p className="subtitle">
          They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
        </p>
      </div>

      {/* Preview Card */}
      <div className="preview-card">
        <img className="author-avatar" src="/Matilda Profile.png" alt="author icon" />
        <img className="artwork" src="/capturing memories.png" alt="capture memories" />
        <h6 className="item-title">Capturing Memories</h6>
        <div className="item-price">
          <img className="solana-icon" src="Solana.svg" alt="solana icon" />
          <span className="price-label">from</span>
          <span className="price-value">7 Sol</span>
        </div>
      </div>

      {/* Publish Button */}
      <button className="publish-button">Publish</button>

      {/* Progress Bar */}
      <div className="step7-progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
};

export default NewListingsStep7;
