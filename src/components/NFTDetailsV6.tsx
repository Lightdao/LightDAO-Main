import React from "react";
import "./nftdetailsv6.css";

const NFTDetailsV6 = () => {
  const bids = [
    { user: "dobroslavas", amount: "2.52", date: "13 Aug 2024, 16:40" },
    { user: "megapeme", amount: "2.50", date: "09 Aug 2024, 17:20" },
    { user: "sfemAnne", amount: "2.70", date: "23 Dec 2023, 16:30" },
    { user: "wulf_kinder", amount: "2.75", date: "11 Oct 2023, 19:15" },
    { user: "lvia.p40", amount: "2.80", date: "10 Sept 2023, 22:15" },
    { user: "hashlimbt", amount: "2.87", date: "05 Jul 2023, 23:40" },
  ];

  const collection = [
    { id: 1, name: "Election Season", author: "Sofielle Balskm", price: "0.45 Sol", img: "/nft1.jpg" },
    { id: 2, name: "Lorr's Ad Issues", author: "Damon Peterson", price: "7 Sol", img: "/nft2.jpg" },
    { id: 3, name: "Science Jobs", author: "Ezequiel Dengra", price: "17.59 Sol", img: "/nft3.jpg" },
    { id: 4, name: "Venture Capitalist", author: "Merrit Burgett", price: "3 Sol", img: "/nft4.jpg" },
  ];

  return (
    <div className="nft-details-container">
      {/* NFT Section */}
      <div className="nft-section">
        <img src="/nft-main.jpg" alt="Lion of Judah" className="nft-image" />

        <div className="nft-info">
          <h2> Lion of Judah #777</h2>
          <p>A collection of 10,000 NFTs minted on Solana blockchain. Each unique artwork is randomly generated.</p>

          <div className="nft-meta">
            <span>Creator: 0x33cd08ffc...987c</span>
            <span>Collection: PBCCollection</span>
          </div>

          {/* Bids Section */}
          <div className="bids">
            <h3>Recent Bids</h3>
            {bids.map((bid, index) => (
              <div key={index} className="bid">
                <span>{bid.user}</span>
                <span>{bid.amount} Sol</span>
                <span>{bid.date}</span>
              </div>
            ))}
          </div>

          {/* Place Bid */}
          <div className="bid-box">
            <h3>Top bid: 2.87 Sol ($2.1K USD)</h3>
            <p>Sale ends in: 3d 10h 40m 37s</p>
            <button className="bid-button">Place your bid</button>
          </div>
        </div>
      </div>

      {/* More Collection */}
      <h3 className="section-title">More from this collection</h3>
      <div className="collection-grid">
        {collection.map((nft) => (
          <div key={nft.id} className="collection-card">
            <img src={nft.img} alt={nft.name} />
            <h4>{nft.name}</h4>
            <p>by {nft.author}</p>
            <span className="price">{nft.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTDetailsV6;
