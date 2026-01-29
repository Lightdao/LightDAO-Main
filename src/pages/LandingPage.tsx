import React from "react";
import NFTCard from "../components/NFTCard";
import "./LandingPage.css";
import MainHeader from "../components/MainHeader";
import NavigationFooter from "../components/NavigationFooter";

const LandingPage: React.FC = () => {
  return (
    <div className="landingpage-container">
      <MainHeader />
      {/* Hero Section */}
      <section className="landingpage-hero">
        <div className="landingpage-hero-content">
          <h1 className="landingpage-hero-title">
            Discover, collect, and sell Faith Driven NFTs.
          </h1>
          <p className="landingpage-hero-subtitle">
            Our marketplace is the world's first Christian NFT market for
            Christian creators worldwide.
          </p>
        </div>
      </section>

      {/* Selected Notable Drops Section */}
      <section className="landingpage-section landingpage-drops">
        <h2 className="landingpage-section-title">Selected notable drops</h2>
        <div className="landingpage-drops-grid">
          <NFTCard
            image="/art@2x.png"
            title="Lion of Judah"
            price="0.45"
            badge="Live Now"
            badgeNumber="24"
          />
          <NFTCard
            image="/art@2x.png"
            title="Light Lady"
            price="0.05"
            badge="01 Nov 2022"
            badgeNumber="32"
          />
          <NFTCard
            image="/art@2x.png"
            title="BeHope - Church project"
            price="17.59"
            badge="Live Now"
            badgeNumber="20"
          />
          <NFTCard
            image="/art@2x.png"
            title="Behind One of Big Hacks"
            price="9"
            badge="18 Aug 2022"
            badgeNumber="28"
          />
        </div>
      </section>

      {/* Top Selling Collections Section */}
      <section className="landingpage-section landingpage-collections">
        <h2 className="landingpage-section-title">
          Top sellings collections{" "}
          <span className="landingpage-collections-subtitle">last 7 days</span>
        </h2>

        <div className="landingpage-collections-grid">
          {[
            {
              rank: 1,
              name: "Wonders of His Creation",
              value: "10,450.00",
              change: "+10.00%",
            },
            {
              rank: 2,
              name: "Grace Illuminated: Divine Art",
              value: "5344.33",
              change: "+8.94%",
            },
            {
              rank: 3,
              name: "Testaments in Every Stroke",
              value: "33457.59",
              change: "+12.00%",
            },
            {
              rank: 4,
              name: "The Eternal Kingdom Collection",
              value: "19,320.00",
              change: "+18.00%",
            },
            {
              rank: 5,
              name: "Covenant Chronicles: Art of Faith",
              value: "4578.40",
              change: "+13.40%",
            },
            {
              rank: 6,
              name: "Sermons in Color and Light",
              value: "5344.13",
              change: "+14.50%",
            },
            {
              rank: 7,
              name: "Heavenly Promises Illustrated",
              value: "13457.59",
              change: "+17.20%",
            },
            {
              rank: 8,
              name: "Saints and Miracles",
              value: "3355.20",
              change: "+19.30%",
            },
            {
              rank: 9,
              name: "A Sacred Journey",
              value: "6890.34",
              change: "+7.40%",
            },
          ].map((collection) => (
            <div key={collection.rank} className="landingpage-collections-item">
              <div className="landingpage-collections-rank">
                {collection.rank}
              </div>
              <div className="landingpage-collections-icon"></div>
              <div className="landingpage-collections-details">
                <div className="landingpage-collections-name">
                  {collection.name}
                </div>
                <div className="landingpage-collections-value">
                  <img src="../../public/Solana.svg" alt="solana icon" />
                  {collection.value}
                </div>
              </div>
              <div className="landingpage-collections-change">
                {collection.change}
              </div>
            </div>
          ))}
        </div>
        <button className="landingpage-loadmore">Load More</button>
      </section>

      {/* Trending NFTs Section */}
      <section className="landingpage-section landingpage-trending">
        <h2 className="landingpage-section-title">Trending NFTs</h2>
        <div className="landingpage-trending-grid">
          <NFTCard
            image="/art@2x.png"
            title="Lion of Judah"
            price="1"
            artist="by PatrickBezalel"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit."
            badgeNumber="32"
          />
          <NFTCard
            image="/art@2x.png"
            title="Lorr's Ad Issues"
            price="1"
            artist="by Sijmen Immens"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit."
            badgeNumber="19"
          />
          <NFTCard
            image="/art@2x.png"
            title="Capturing Memories"
            price="1"
            artist="by Chioke Okonkwo"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit."
            badgeNumber="18"
          />
          <NFTCard
            image="/art@2x.png"
            title="Heavenly Journey"
            price="1"
            artist="by Wim Willems"
            description="Lorem ipsum odor amet, consectetuer adipiscing elit."
            badgeNumber="12"
          />
        </div>
        <div className="landingpage-trending-dots">
          <div className="landingpage-trending-dot landingpage-trending-dot-active"></div>
          <div className="landingpage-trending-dot"></div>
          <div className="landingpage-trending-dot"></div>
          <div className="landingpage-trending-dot"></div>
          <div className="landingpage-trending-dot"></div>
        </div>
      </section>

      {/* Resources for Getting Started Section */}
      <section className="landingpage-section landingpage-resources">
        <h2 className="landingpage-section-title">
          Resources for getting started
        </h2>
        <div className="landingpage-resources-grid">
          <div className="landingpage-resources-card">
            <img
              src="/art@2x.png"
              alt="Notebook"
              className="landingpage-resources-image"
            />
            <h3 className="landingpage-resources-title">
              I should have received NFTs
            </h3>
            <p className="landingpage-resources-description">
              Unfortunately, it can happen by accident if you're confident you
              qualify for but didn't receive
            </p>
            <a href="#" className="landingpage-resources-link">
              See more details
            </a>
          </div>
          <div className="landingpage-resources-card">
            <img
              src="/art@2x.png"
              alt="Laptop"
              className="landingpage-resources-image"
            />
            <h3 className="landingpage-resources-title">
              I think I minted duplicate NFTs
            </h3>
            <p className="landingpage-resources-description">
              What's better than an NFT? 2 NFTs! But you don't always want to
              mint 2 NFTs of the same artwork.
            </p>
            <a href="#" className="landingpage-resources-link">
              See more details
            </a>
          </div>
          <div className="landingpage-resources-card">
            <img
              src="/art@2x.png"
              alt="Desk"
              className="landingpage-resources-image"
            />
            <h3 className="landingpage-resources-title">
              The Marketplace isn't working
            </h3>
            <p className="landingpage-resources-description">
              Unfortunately, it can happen by accident if you're confident you
              qualify for but didn't receive
            </p>
            <a href="#" className="landingpage-resources-link">
              See more details
            </a>
          </div>
        </div>
      </section>

      {/* Browse Popular NFTs Section */}
      <section className="landingpage-section landingpage-browse">
        <h2 className="landingpage-section-title">Browse popular NFTs</h2>
        <div className="landingpage-browse-tabs">
          <button className="landingpage-browse-tab landingpage-browse-tab-active">
            All
          </button>
          <button className="landingpage-browse-tab">Trending</button>
          <button className="landingpage-browse-tab">Collectibles</button>
          <button className="landingpage-browse-tab">Domain Names</button>
          <button className="landingpage-browse-tab">Music</button>
          <button className="landingpage-browse-tab">Photography</button>
        </div>
        <div className="landingpage-browse-grid">
          <NFTCard
            image="/art@2x.png"
            title="Election Season"
            artist="by Sofietje Boksem"
            price="0.45"
          />
          <NFTCard
            image="/art@2x.png"
            title="Lorr's Ad Issues"
            artist="by Dameon Peterson"
            price="7"
          />
          <NFTCard
            image="/art@2x.png"
            title="Science Jobs"
            artist="by Ezequiel Degra"
            price="17.50"
          />
          <NFTCard
            image="/art@2x.png"
            title="Venture Capitalist"
            artist="by Merrile Burgett"
            price="3"
          />
        </div>
        <button className="landingpage-loadmore">Load More</button>
      </section>

      <NavigationFooter />
    </div>
  );
};

export default LandingPage;
