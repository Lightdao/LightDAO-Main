import React from "react";
import "./MainHeader.css";

const MainHeader: React.FC = () => {
  return (
    <header className="main-header">
      <a className="logo" href="/">LIGHTDAO</a>
      <input
        type="text"
        className="header-search-bar"
        placeholder="Search items, collections, and accounts"
      />
      <nav className="nav-links">
        <a href="/Marketplace">Explore</a>
        <a href="/Stats">Stats</a>
        <a href="/Drops">Drops</a>
        <a href="/Dashboard">Activity</a>
        <a href="/CreateListing" className="create-btn">Create</a>
        <img src="/main profile.png" alt="Profile" className="profile-pic" />
      </nav>
    </header>
  );
};

export default MainHeader;
