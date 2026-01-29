import MainHeader from "../components/MainHeader";
import MarketplaceNFTCard from "../components/MarketplaceNFTCard";
import "./MarketplacePage.css";

const Marketplace: React.FC<{}> = () => {
  const marketplaceNFTData = [
    { title: "Right Messages and Memes", price: "1.90", image: "/art@2x.png" },
    {
      title: "Brick-and-morter Travels",
      price: "0.45",
      image: "/Tracking2x.png",
    },
    { title: "Free Way To Back up", price: "0.53", image: "/behind2x.png" },
    { title: "Waymo", price: "2.43", image: "/art@2x.png" },
    { title: "Firefox Cloud", price: "7.3", image: "/cloudNFT.png" },
    { title: "Publishers Retreat", price: "2.75", image: "/art@2x.png" },
    { title: "Shifting Algorithms", price: "1", image: "/personNFT.png" },
    { title: "Ambitions Unboxed", price: "0.93", image: "/art@2x.png" },
  ];

  return (
    <div className="marketplace-page">
      <MainHeader />
      <div className="marketplace-main-content">
        <div>
          <h1>Explore NFTs</h1>
          <div className="marketplace-content-filters">
            <div className="marketplace-content-filter-buttons">
              <button className="marketplace-content-filters-button active">
                All
              </button>
              <button className="marketplace-content-filters-button">
                Trending
              </button>
              <button className="marketplace-content-filters-button">
                Collectibles
              </button>
              <button className="marketplace-content-filters-button">
                Domain Names
              </button>
              <button className="marketplace-content-filters-button">
                Music
              </button>
              <button className="marketplace-content-filters-button">
                Photography
              </button>
            </div>
            <div className="marketplace-content-filter-buttons">
              <button className="marketplace-content-filters-button">
                Apply Filter
              </button>
              <button className="marketplace-content-filters-button">
                Sort By
              </button>
            </div>
          </div>
          <div className="marketplace-grid">
            {marketplaceNFTData.map((item, index) => (
              <MarketplaceNFTCard
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="marketplace-load-more">
        <button className="marketplace-load-more-button">Load More</button>
      </div>
    </div>
  );
};

export default Marketplace;
