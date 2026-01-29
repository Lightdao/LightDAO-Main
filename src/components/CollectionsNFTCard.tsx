import React from "react";
import "./CollectionsNFTCard.css";

type CollectionsNFTCardProps = {
  title: string;
  price: string;
  image: string;
};

const CollectionsNFTCard: React.FC<CollectionsNFTCardProps> = ({
  title,
  price,
  image,
}) => {
  return (
    <div className="collections-nft-card">
      <img src={image} alt={title} className="collections-nft-image" />
      <div className="collections-nft-info">
        <h3>{title}</h3>
        <p>{price} SOL</p>
      </div>
    </div>
  );
};

export default CollectionsNFTCard;
