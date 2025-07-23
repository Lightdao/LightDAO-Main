import React from 'react';
import MainHeader from "../components/MainHeader";
import MainSideBar from '../components/MainSideBar';
import { MainPageToLoad } from '../components/MainSideBar';
import './HelpCenterHome.css';

//TODO: link other help pages to here
const HelpCenterHome: React.FC = () => {
  return (
    <>
      <MainHeader />
      <div className="help-center-home">
        <MainSideBar sidebarNumber={MainPageToLoad.HelpCenter} />
        <main className="main-content">
          <h1 className="main-title">How it works</h1>
          <section className="help-boxes">
            <div className="help-box">
              <h2>Getting started</h2>
              <ul>
                <li>What is an NFT?</li>
                <li>What are Proof of Work blockchains?</li>
                <li>What is a wallet? Why do I need one?</li>
                <li>How much does it cost to create an NFT?</li>
              </ul>
              <a href="#">See more articles</a>
            </div>
            <div className="help-box">
              <h2>Using NFT Marketplace</h2>
              <ul>
                <li>Which blockchains does marketplace support?</li>
                <li>Why should I use Ethereum?</li>
                <li>Why should I use Flow on this marketplace?</li>
                <li>Why should I use Tezos on this marketplace?</li>
              </ul>
              <a href="#">See more articles</a>
            </div>
            <div className="help-box">
              <h2>Safety, Security, and Policies</h2>
              <ul>
                <li>Is connecting my wallet secure?</li>
                <li>I bought an NFT, but I think I was scammed?</li>
                <li>My verification request was rejected. Can I reapply?</li>
                <li>What are your community rules and guidelines?</li>
              </ul>
              <a href="#">See more articles</a>
            </div>
            <div className="help-box">
              <h2>Troubleshooting</h2>
              <ul>
                <li>I should have received NFT. How do I claim it?</li>
                <li>I think I minted duplicate NFTs</li>
                <li>Marketplace isn't working properly. Now what?</li>
                <li>I think my NFT disappeared. Why?</li>
              </ul>
              <a href="#">See more articles</a>
            </div>
          </section>

          <h2>Popular help articles</h2>
          <section className="popular-articles">
            <div className="article-card">
              <h3>I can’t see the artwork on NFT’s marketplace listing, what’s wrong?</h3>
              <p>NFTs are decentralized and stored on the blockchain forever — so you might be to see</p>
              <a href="#">Read more</a>
            </div>
            <div className="article-card">
              <h3>How do I change or cancel my experience reservation?</h3>
              <p>Is our site or your profile not loading? Are you having issues trying to create, buy, or sell NFTs</p>
              <a href="#">Read more</a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HelpCenterHome;
