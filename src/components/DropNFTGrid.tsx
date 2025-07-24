import React from "react";
import "./DropNFTGrid.css";

interface NFT {
  id: number;
  name: string;
  price: string;
  img: string;
  author: string;
};

interface NFTDetails {
    nftData: NFT[];
}

const DropNFTGrid: React.FC<NFTDetails> = ({nftData}) => {
  return (
    <div className="drop-nft-grid">
      <h2>What's Inside?</h2>
      <div className="drop-grid">
        {nftData.map((nft, index) => (
          <div className="drop-nft-card" key={nft.id}>
            <img  className="drop-nft-card-author-img" src={nft.author} alt="Author photos"/>
            <img className="drop-nft-card-main-img" src={nft.img} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>{nft.price}</p>
          </div>
        ))}
      </div>
      <button className="drop-load-more-btn">Load More</button>
    </div>
  );
};

export default DropNFTGrid;
