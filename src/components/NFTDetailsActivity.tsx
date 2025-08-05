import React from "react";
import "./NFTDetailsActivity.css";

const NFTDetailsActivity: React.FC = () => {
  const bids = [
    { user: "dobroslavas", amount: "2.52", date: "13 Aug 2024", time: "16:40" },
    { user: "megapeme", amount: "2.50", date: "09 Aug 2024", time: "17:20" },
    { user: "sfemAnne", amount: "2.70", date: "23 Dec 2023", time: "16:30" },
    { user: "wulf_kinder", amount: "2.75", date: "11 Oct 2023", time: "19:15" },
    { user: "lvia.p40", amount: "2.80", date: "10 Sept 2023", time: "22:15" },
    { user: "hashlimbt", amount: "2.87", date: "05 Jul 2023", time: "23:40" },
  ];


  return (
    <div className="nft-details-activity">
      <h2>Activity</h2>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>
            <span><strong>{bid.user}</strong></span>
            <span>{bid.amount}</span>
            <span>{bid.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NFTDetailsActivity;
