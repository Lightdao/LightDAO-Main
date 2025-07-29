import React from 'react';
import { StepHandler } from '../pages/NewListingPage';
import './NewListingsStep4.css';
import NewListingTopBar from './NewListingTopBar';

const NewListingsStep4: React.FC<StepHandler> = ({incrementStepNumber, decrementStepNumber}) => {
  return (
    <div className="step4-container">
      <NewListingTopBar />

      {/* Title */}
      <div className="step4-title">
        <h1 className="new-listing-title">Enter item details</h1>
        <p className="subtitle">
          They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
        </p>
      </div>

      {/* Form Fields */}
      <div className="form">
        <div className="form-group">
          <label>Name your item</label>
          <input type="text" placeholder="e.g. Redeemable T-Shirt with Logo" />
        </div>
        <div className="form-group">
          <label>Enter short description</label>
          <input type="text" placeholder="e.g. After purchase you will get a T-Shirt" />
        </div>
        <div className="form-group">
          <label>Add properties</label>
          <div className="tag-list">
            <span className="tag">Art</span>
            <span className="tag">Body type</span>
            <span className="tag">Face color</span>
          </div>
        </div>
        <div className="form-group split">
          <div>
            <label>Set item price or starting bid</label>
            <input type="text" placeholder="e.g. 0,01 Sol" />
          </div>
          <div>
            <label>Select royalties amount, %</label>
            <input type="text" placeholder="Select desired amount" />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={decrementStepNumber} className="nav-button back">Back</button>
        <button onClick={incrementStepNumber} className="nav-button next">Next</button>
      </div>

      {/* Progress Bar */}
      <div className="step4-progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
};

export default NewListingsStep4;
