import React from "react";
import "./NFTDetailsMain.css";
import Timer from "./Timer";
import NFTDetailsActivity from "./NFTDetailsActivity";
import { useParams } from "react-router-dom";

type RouteParams = {
  id: string;
};

//NOTE: using this for temporary solution, will need to grab nft data from blockchain and dynamically route by its address
const nftDetails = [
  {
    name: "Lion of Judah",
    img: "/Lion.png",
    description:
      "A collection of 10,000 unique NFTs minted on the Solana blockchain. Each unique artwork is randomly generated from a combination of traits.",
    price: "10.0",
    address: "0x10A2FF1022D...0eD3a87E",
  },
  {
    name: "Behind One of Big Hacks",
    img: "/art@2x.png",
    description:
      "A collection of 10,000 unique NFTs minted on the Solana blockchain. Each unique artwork is randomly generated from a combination of traits.",
    price: "9",
    address: "0x10A2FF1022D...0eD3a87E",
  },
];

//NOTE: I think there is confusion on the design for this page, this should be for individual nfts,
//maybe there needs to be a collection details page. Also there is no buy option and only an auction
const NFTDetailsMain: React.FC = () => {
  const { id } = useParams<RouteParams>();

  return (
    <>
      <div className="nft-image-section">
        <img
          src={nftDetails[Number(id)].img}
          alt={nftDetails[Number(id)].name}
          className="nft-image"
        />
      </div>
      <div className="nft-info-section">
        <h1>{nftDetails[Number(id)].name}</h1>
        <p>{nftDetails[Number(id)].description}</p>
      </div>
      <div className="nft-auction-section">
        <div className="nft-price">
          <p>Top Bid:</p>
          <span>{nftDetails[Number(id)].price} SOL (92.1K USD)</span>
          <button className="nft-address">
            {nftDetails[Number(id)].address}
          </button>
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
