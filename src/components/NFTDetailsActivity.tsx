import React from "react";
import "./NFTDetailsActivity.css";

const NFTDetailsActivity: React.FC = () => {
  const bids = [
    { user: "dobroslavas", amount: "2.52", date: "13 Aug 2024", time: "16:40", profileImage: "bidProfile.png" },
    { user: "megapeme", amount: "2.50", date: "09 Aug 2024", time: "17:20", profileImage: "bidProfile.png" },
    { user: "sfemAnne", amount: "2.70", date: "23 Dec 2023", time: "16:30", profileImage: "bidProfile.png" },
    { user: "wulf_kinder", amount: "2.75", date: "11 Oct 2023", time: "19:15", profileImage: "bidProfile.png" },
    { user: "lvia.p40", amount: "2.80", date: "10 Sept 2023", time: "22:15", profileImage: "bidProfile.png" },
    { user: "hashlimbt", amount: "2.87", date: "05 Jul 2023", time: "23:40", profileImage: "bidProfile.png" },
  ];


  return (
    <div className="nft-details-activity">
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>
            <img className="nft-details-activity-profile" src={bid.profileImage} alt="bidder profile" />
            <div>
              <div className="nft-details-activity-bid">
              <p>bid </p>
              <img src="Solana.svg" alt="" />
              <p><strong> {bid.amount}</strong></p>
              </div>

              <p>
              by
              <strong> {bid.user}</strong>
              <span> {bid.date} {bid.time}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NFTDetailsActivity;
