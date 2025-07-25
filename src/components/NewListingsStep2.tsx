import React, { useState } from 'react';
import { StepHandler } from '../pages/NewListingPage';
import './NewListingsStep2.css';
import NewListingTopBar from './NewListingTopBar';

const UploadItem: React.FC<StepHandler> = ({incrementStepNumber, decrementStepNumber}) => {
  const [selected, setSelected] = useState<'single' | 'collection' | null>(null);

  return (
    <div className="new-listings-container">
      <NewListingTopBar />
      {/* Title */}
      <h1 className="title">Upload an item</h1>
      <p className="subtitle">
        They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
      </p>

      {/* Option Cards */}
      <div className="card single-item-card">
        <div className="item-art" />
        <h6 className="card-title">Create single item</h6>
        <button className="select-button" onClick={() => setSelected('single')}>Select</button>
      </div>

      <div className="card collection-item-card">
        <div className="item-art collection">
          <div className="layer layer-1" />
          <div className="layer layer-2" />
          <div className="layer layer-3" />
        </div>
        <h6 className="card-title">Create collection</h6>
        <button className="select-button outline" onClick={() => setSelected('collection')}>Select</button>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <div>
          <a href="/Dashboard" className="step2-nav-button back">Back</a>
        </div>
        <button onClick={incrementStepNumber} className="nav-button next">Next</button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
};

export default UploadItem;
