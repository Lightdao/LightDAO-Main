import React from "react";
import "./DashboardCollections.css";

const DashboardCollections: React.FC = () => {
  const collections = [
    {
      name: "Meaningful Project",
      owners: "10.0k",
      change: +18.6,
      price: "4,915",
      image: "/behind.png",
    },
    {
      name: "Kingdom Project",
      owners: "8.8k",
      change: -24.5,
      price: "99.1",
      image: "/behind.png",
    },
    {
      name: "RTFKT CloneX Mintvial",
      owners: "14.5k",
      change: +13.0,
      price: "4,310",
      image: "/behind.png",
    },
    {
      name: "Chromie Squiggle by Snowfro",
      owners: "6.7k",
      change: +19.3,
      price: "3,905",
      image: "/behind.png",
    },
    {
      name: "Kingdom Kennel Club",
      owners: "19.7k",
      change: +29.0,
      price: "3,570",
      image: "/behind.png",
    },
  ];

  return (
    <div className="dashboard-collections">
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
              <td>
                <div className="dashboard-collection-name">
                  <img src={collection.image} alt="collection image" />
                  {collection.name}
                </div>
              </td>
              <td>{collection.owners}</td>
              <td
                className={
                  collection.change > 0
                    ? "dashboard-collections-positive-change"
                    : "dashboard-collections-negative-change"
                }
              >
                {collection.change}%
              </td>
              <td>
                <div className="dashboard-collection-crypto-icon">
                  <img src="/Solana.svg" alt="solana icon" />
                  {collection.price}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardCollections;
