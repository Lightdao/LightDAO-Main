import React from "react";
import "./DropNFTGrid.css";

interface NFT {
  id: number;
  name: string;
  price: string;
  img: string;
};

interface NFTDetails {
    nftData: NFT[];
}

//NOTE: for now linking these to /NFTDetails/0 with dynamic routing, but will need to route with its address eventually for each nft
const DropNFTGrid: React.FC<NFTDetails> = ({nftData}) => {
  return (
    <div className="drop-nft-grid">
      <h2>What's Inside?</h2>
      <div className="drop-grid">
        {nftData.map((nft, index) => (
          <a href="/NFTDetails/0" className="drop-nft-card-link">
            <div className="drop-nft-card" key={nft.id}>
                <img className="drop-nft-card-main-img" src={nft.img} alt={nft.name} />
                <h3>{nft.name}</h3>
                <p>{nft.price}</p>
            </div>
          </a>
        ))}
      </div>
      <button className="drop-load-more-btn">Load More</button>
    </div>
  );
};

export default DropNFTGrid;
