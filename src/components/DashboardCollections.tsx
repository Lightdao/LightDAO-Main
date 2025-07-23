import React from "react";
import "./DashboardCollections.css";

const collections = [
  { name: "Meaningful Project", owners: "10.0k", change: +18.60, price: "4,915" },
  { name: "Kingdom Project", owners: "8.8k", change: -24.50, price: "99.1" },
  { name: "RTFKT CloneX Mintvial", owners: "14.5k", change: +13.00, price: "4,310" },
  { name: "Chromie Squiggle by Snowfro", owners: "6.7k", change: +19.30, price: "3,905" },
  { name: "Kingdom Kennel Club", owners: "19.7k", change: +29.00, price: "3,570" }
];

const DashboardCollections: React.FC = () => {
  return (
    <div className="dashboard-collections">
      <h2>Collections</h2>
      <table>
        <thead>
          <tr>
            <th>Collection</th>
            <th>Owners</th>
            <th>7d %</th>
            <th>Floor Price</th>
          </tr>
        </thead>
        <tbody>
          {collections.map((collection, index) => (
            <tr key={index}>
              <td>{collection.name}</td>
              <td>{collection.owners}</td>
              <td>{collection.change}%</td>
              <td>{collection.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardCollections;
