import React from "react";
import "./NFTDetailsMain.css";
import Timer from "./Timer";
import NFTDetailsActivity from "./NFTDetailsActivity";

const NFTDetailsMain: React.FC = () => {
  return (
    <>
      <div className="nft-image-section">
        <img
          src="Lion.png"
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
      </div>
      <div className="nft-auction-section">
        <div className="nft-price">
          <p>Top Bid:</p>
          <span>2.87 SOL (92.1K USD)</span>
          <button className="nft-address">0x10A2FF1022D...0eD3a87E</button>
        </div>
        <div className="nft-auction">
          <p>Sale ends in:</p>
          <Timer initialTimerValueSeconds={297637} />
          <button className="place-bid-btn">Place Your Bid</button>
        </div>
      </div>
      <div className="nft-bidding-section">
        <div className="nft-bidding-section-buttons">
          <button className="">Details</button>
          <button className="">Bids</button>
          <button className="active">Activity</button>
        </div>
        <hr />
        <NFTDetailsActivity />
      </div>
    </>
  );
};

export default NFTDetailsMain;
