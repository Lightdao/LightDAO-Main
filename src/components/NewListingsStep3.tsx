import React from "react";
import { Images } from "../pages/NewListingPage";
import "./NewListingsStep3.css";
import NewListingTopBar from "./NewListingTopBar";


const NewListingsStep3: React.FC<Images> = ({incrementStepNumber, decrementStepNumber, imagePreviewUrl, handleImageChange, selectedImage}) => {
  
  //NOTE: will need to move this into NewListingPage and pass into NewListingStep3 using props
  
  
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

      {/* Upload Box */
      
      /*TODO:
       - allow user to upload image and have preview of it on the page and on future page steps
       - allow user to drag image for uploading
       - make request to send image to test blockchain on submission
       - figure out how to reserve inputted form data across these components for upload
       */
      }
      <div className="upload-box">
        <input className="upload-box-input" type="file" accept="image/*" onChange={handleImageChange} />
        
        {(imagePreviewUrl == null) ? <div>
          <div className="upload-icon">⭳</div>
          <div className="upload-instruction">Drag your item to upload</div>
          <div className="upload-details">
            PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.
          </div>
        </div> : (imagePreviewUrl && <img className="upload-box-image" src={imagePreviewUrl} alt="Preview" />)}
        
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons-step3">
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
