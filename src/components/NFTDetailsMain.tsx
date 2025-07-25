import React from "react";
import "./NFTDetailsMain.css";

const NFTDetailsMain: React.FC = () => {
  return (
    <main className="nft-details-main">
      <div className="nft-image-section">
        <img
          src="/path/to/nft-image.jpg"
          alt="Lion of Judah"
          className="nft-image"
        />
      </div>
      <div className="nft-info-section">
        <h1>Lion of Judah #777</h1>
        <p>
          A collection of 10,000 unique NFTs minted on the Solana blockchain.
          Each unique artwork is randomly generated from a combination of traits.
        </p>
        <div className="nft-price">
          <span>2.87 SOL</span> <span>(92.1K USD)</span>
        </div>
        <div className="nft-auction">
          <p>Sale ends in:</p>
          <p className="nft-timer">3d 10h 40m 37s</p>
        </div>
        <button className="place-bid-btn">Place Your Bid</button>
        <p className="nft-address">0x10A2FF1022D...0eD3a87E</p>
      </div>
    </main>
  );
};

export default NFTDetailsMain;
