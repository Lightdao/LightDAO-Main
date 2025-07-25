import React from "react";
import "./NFTDetailsRelated.css";

const relatedNFTs = [
  { title: "Election Season", price: "0.45 SOL", image: "/path/to/image1.jpg" },
  { title: "Ler's AI Issues", price: "7 SOL", image: "/path/to/image2.jpg" },
  { title: "Science Jobs", price: "12.5 SOL", image: "/path/to/image3.jpg" },
  { title: "Venture Capitalist", price: "5.3 SOL", image: "/path/to/image4.jpg" },
];

const NFTDetailsRelated: React.FC = () => {
  return (
    <section className="nft-details-related">
      <h2>More from this collection</h2>
      <div className="related-grid">
        {relatedNFTs.map((nft, index) => (
          <div className="related-card" key={index}>
            <img src={nft.image} alt={nft.title} />
            <h3>{nft.title}</h3>
            <p>{nft.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NFTDetailsRelated;
