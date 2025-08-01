import React from "react";
import "./DropDetails.css"; // Importing the CSS file

const DropDetails: React.FC<{}> = () => {
  return (
    <div className="drop-details">
      <h2>Lion of Judah Collection</h2>
      <p className="drop-details-social-media-name">@PatrickBealel</p>
      <p>
        Patrick Bezalel throughout his 20 years as an artist, photographer, and designer. 
        All of His works are inspired by His faith in his God, Yeshua. He constantly pushes 
        the boundaries of fine art by seeking to combine technology and art to create immersive 
        experiences he calls “Living Art”.
      </p>
    </div>
  );
};

export default DropDetails;
