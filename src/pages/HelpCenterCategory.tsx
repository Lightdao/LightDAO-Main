import React from "react";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./HelpCenterCategory.css";

interface HelpArticleCardProps {
  title: string;
  description: string;
  link: string;
}

const HelpArticleCard: React.FC<HelpArticleCardProps> = ({ title, description, link }) => (
  <div className="article-card">
    <h2 className="article-title">{title}</h2>
    <p className="article-description">{description}</p>
    <a href={link} className="article-link">
      <span className="label">→See more details</span>
    </a>
  </div>
);

const HelpCenterCategory: React.FC = () => {
  const articles = [
    {
      title: "I should have received NFTs, but I didn't. How do I claim it?",
      description:
        "What’s better than an NFT? 2 NFTs! But you don’t always want to mint 2 NFTs of the same artwork. Unfortunately, it can happen by accident if you’re confident you qualify for but didn’t receive any in the weekly drop",
      link: "#"
    },
    {
      title: 'I think I minted duplicate NFTs. Is that even possible?',
      description:
        'What’s better than an NFT? 2 NFTs! But you don’t always want to mint 2 NFTs of the same artwork. Unfortunately, it can happen by accident if you’re confident you qualify for but didn’t receive any in the drop',
      link: "#"
    },
    {
      title: "The Marketplace isn’t working properly. Now what?",
      description:
        'Is our site or your profile not loading? Are you having issues when you try to create, buy, or sell NFTs? What about missing prompts and notifications? Try completing the following',
      link: "/HelpCenterHome/HelpCenterCategory/HelpCenterPost"
    },
    {
      title: 'I think my NFT disappeared from Marketplace. Why?',
      description:
        'Don’t worry, Rarible can’t take anything out of your wallet or remove NFTs from any blockchain. Can’t see the artwork on your NFT? If you’re confident you qualify for but didn’t receive any in the weekly drop, please file a request',
      link: "#"
    },
  ];

  return (
    <>
      <MainHeader />
      <MainSideBar sidebarNumber={MainPageToLoad.HelpCenter}/>
      <div className="help-category-wrapper">
        <h1 className="page-heading">Troubleshooting</h1>
        <div className="breadcrumb">Help Center &nbsp;/&nbsp; Account &nbsp;/&nbsp; <strong>Troubleshooting</strong></div>
        <div className="articles-list">
          {articles.map((article, index) => (
            <HelpArticleCard
              key={index}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
        <div className="help-footer-cta">
          <div>
            <h4>Not finding what you need?</h4>
            <p>Find category-specific content in the Help Center</p>
          </div>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default HelpCenterCategory;
