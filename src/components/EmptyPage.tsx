import React from 'react';
import './EmptyPage.css';

interface EmptyInformation {
    emptyHeader: string;
    buttonText: string;
    navigationLink: string;
}

const Empty: React.FC<EmptyInformation> = ({emptyHeader, buttonText, navigationLink}) => {
  return (
    <div className="empty-page">
        <div className="empty-page-state">
          <img className="empty-page-state-image" src="/emptyfavorites.png" alt="empty favorites image" />
          <h4>{emptyHeader}</h4>
          <div className="empty-page-suggestion">Try to assign more tasks to your employees or create a new project from scratch</div>
          <a href={navigationLink} className="empty-page-explore-button">{buttonText}</a>
        </div>
    </div>
  );
};

export default Empty;