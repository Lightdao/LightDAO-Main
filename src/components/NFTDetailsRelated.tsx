import React from "react";
import "./NFTDetailsRelated.css";

const relatedNFTs = [
  { title: "Election Season", price: "0.45 SOL", image: "/Lion.png" },
  {
    title: "Ler's AI Issues",
    price: "7 SOL",
    image: "/capturing memories.png",
  },
  { title: "Science Jobs", price: "12.5 SOL", image: "/Lion.png" },
  { title: "Venture Capitalist", price: "5.3 SOL", image: "/Lion.png" },
];

const NFTDetailsRelated: React.FC = () => {
  return (
    <div className="nft-details-related">
      <h2>More from this collection</h2>
      <div className="nft-details-related-grid">
        {relatedNFTs.map((nft, index) => (
          <div className="nft-details-related-card" key={index}>
            <img src={nft.image} alt={nft.title} />
            <h3>{nft.title}</h3>
            <p>{nft.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTDetailsRelated;
