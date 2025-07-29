import React from "react";
import { StepHandler } from "../pages/NewListingPage";
import "./NewListingsStep3.css";
import NewListingTopBar from "./NewListingTopBar";

const NewListingsStep3: React.FC<StepHandler> = ({incrementStepNumber, decrementStepNumber}) => {
  return (
    <div className="step3-container">
      <NewListingTopBar />

      {/* Title */}
      <div className="step3-title">
        <h1 className="new-listing-title">Upload an item</h1>
        <p className="subtitle">
          They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
        </p>
      </div>

      {/* Upload Box */}
      <div className="upload-box">
        <div className="upload-icon">⭳</div>
        <div className="upload-instruction">Drag your item to upload</div>
        <div className="upload-details">
          PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={decrementStepNumber} className="nav-button back">Back</button>
        <button onClick={incrementStepNumber} className="nav-button next">Next</button>
      </div>

      {/* Progress Bar */}
        <div className="step3-progress-bar">
          <div className="progress-fill" />
        </div>
    </div>
  );
};

export default NewListingsStep3;
