import React from 'react';
import MainHeader from '../components/MainHeader';
import './HelpCenterPost.css';
import MainSideBar, { MainPageToLoad } from '../components/MainSideBar';

const HelpCenterPost: React.FC = () => {
  return (
    <>
      <MainHeader />
      <MainSideBar sidebarNumber={MainPageToLoad.HelpCenter}/>
      <div className="help-center-post-main-content">
        <p className="intro-text">
          There is no better advertisement campaign that is low cost and also successful at the same time. Great business
          ideas when utilized effectively can save lots of money. This is not only easy for those who work full-time as
          an advertiser, but also for those who work from home.
        </p>

        <div className="quote-box">
          <p className="quote-text">
            1. Fliers and business cards can be tacked on such bulletin boards.<br />
            2. But before doing so, check out with the human resource department<br />
            3. Parents are required to be in regular touch with the teachers to know<br />
            4. Do not miss this opportunity and spread the word. Hand them the business card
          </p>
        </div>

        <p className="main-text">
          Get involved with fundraiser at schools, as it’s a nice approach to market business. Prior to handing out the
          order received, collect all necessary information like business card pack, fliers, with proper information.
          Information can be based on what is the company about, what are the products and services provided, or how to
          get information in touch with the company. In each individual order, carefully place all of them and seal the
          package properly. Presentation, too, is of importance and should be paid attention.
        </p>

        <p className="note-text">
          Note: Voice mails can be put to good use, other than recording messages. They can help to deliver the marketing
          message. Greet with a brief message, following with website and email address, so that who ever calls will be
          already.
        </p>
      </div>
    </>
  );
};

export default HelpCenterPost;
