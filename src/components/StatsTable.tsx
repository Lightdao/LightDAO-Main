import React from "react";
import "./StatsTable.css";

type StatsRow = {
  rank: number;
  collection: string;
  volume: string;
  change: string;
  floorPrice: string;
  owners: string;
};

const statsData: StatsRow[] = [
  { rank: 1, collection: "Bored Ape Yacht Club", volume: "4.8K", change: "+10.5%", floorPrice: "75.0 ETH", owners: "6K" },
  { rank: 2, collection: "Azuki", volume: "3.6K", change: "-5.2%", floorPrice: "11.2 ETH", owners: "2K" },
  { rank: 3, collection: "CryptoPunks", volume: "6.0K", change: "+8.1%", floorPrice: "100.0 ETH", owners: "10K" },
  { rank: 4, collection: "CloneX", volume: "2.5K", change: "-3.7%", floorPrice: "7.5 ETH", owners: "3K" },
];

const StatsTable: React.FC = () => {
  return (
    <div className="stats-table">
      <h1>Top Selling NFTs</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Collection</th>
            <th>Volume</th>
            <th>24H %</th>
            <th>Floor Price</th>
            <th>Owners</th>
          </tr>
        </thead>
        <tbody>
          {statsData.map((row) => (
            <tr key={row.rank}>
              <td>{row.rank}</td>
              <td>{row.collection}</td>
              <td>{row.volume}</td>
              <td className={parseFloat(row.change) > 0 ? "positive" : "negative"}>{row.change}</td>
              <td>{row.floorPrice}</td>
              <td>{row.owners}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="load-more">Load More</button>
    </div>
  );
};

export default StatsTable;
