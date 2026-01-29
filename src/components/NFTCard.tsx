import React from "react";
import "./NFTCard.css";

interface NFTCardProps {
  image: string;
  title: string;
  artist?: string;
  description?: string;
  price: string;
  badge?: string;
  badgeNumber?: string;
}

const NFTCard: React.FC<NFTCardProps> = ({
  image,
  title,
  artist,
  description,
  price,
  badge,
  badgeNumber,
}) => {
  return (
    <div className="nftcard-container">
      <div className="nftcard-image-container">
        <img src={image} alt={title} className="nftcard-image" />
        {badge && <div className="nftcard-image-badge">{badgeNumber}</div>}
      </div>
      <div className="nftcard-content">
        <h3 className="nftcard-title">{title}</h3>
        {artist && <p className="nftcard-artist">{artist}</p>}
        {description && <p className="nftcard-description">{description}</p>}
        {price && (
          <div
            className={`nftcard-price ${artist ? "nftcard-price-without-label" : ""}`}
          >
            <img src="../../public/Solana.svg" alt="solana icon" />
            <span className="nftcard-price-label">from</span>
            <span className="nftcard-price-value">{price}</span>
            <span className="nftcard-price-currency">sol</span>
          </div>
        )}
        {badge && <div className="nftcard-badge">{badge}</div>}
      </div>
    </div>
  );
};

export default NFTCard;
