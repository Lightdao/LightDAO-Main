import React from "react";
import "./MarketplaceNFTCard.css";

interface NFTCardProps {
  title: string;
  price: string;
  image: string;
};

const MarketplaceNFTCard: React.FC<NFTCardProps> = ({ title, price, image }) => {
  return (
    <div className="marketplace-nft-card">
      <img className="marketplace-nft-image" src={image} alt={title} />
      <div className="marketplace-nft-info">
        <h3>{title}</h3>
        <p>Price: {price} SOL</p>
      </div>
    </div>
  );
};

export default MarketplaceNFTCard;
