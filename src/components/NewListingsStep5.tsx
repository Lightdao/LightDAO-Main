import React, { useState } from 'react';
import { StepHandler } from '../pages/NewListingPage';
import './NewListingsStep5.css';
import NewListingTopBar from './NewListingTopBar';

interface CollectionItem {
  id: string;
  title: string;
  items: number;
  imageUrl: string;
}

const collections: CollectionItem[] = [
  {
    id: 'new',
    title: 'Create new collection',
    items: 0,
    imageUrl: '',
  },
  {
    id: 'battle',
    title: 'Battle for Digital',
    items: 56,
    imageUrl: '/images/collection1.png',
  },
  {
    id: 'rare',
    title: 'A Rare Path',
    items: 94,
    imageUrl: '/images/collection2.png',
  },
];

const NewListingsStep5: React.FC<StepHandler> = ({incrementStepNumber, decrementStepNumber}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="step5-container">
      <NewListingTopBar />

      {/* Title */}
      <h1 className="title">Choose collection</h1>
      <p className="subtitle">
        They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
      </p>

      {/* Collection List */}
      <div className="collection-list">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className={`collection-card ${selectedId === collection.id ? 'selected' : ''}`}
            onClick={() => setSelectedId(collection.id)}
          >
            <div className="collection-image">
              {collection.imageUrl ? (
                <img src={collection.imageUrl} alt={collection.title} />
              ) : (
                <div className="new-image-placeholder">＋</div>
              )}
            </div>
            <div className="collection-details">
              <h6>{collection.title}</h6>
              {collection.id !== 'new' && <p>{collection.items} items</p>}
            </div>
            <button className="select-button">Select</button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={decrementStepNumber} className="nav-button back">Back</button>
        <button onClick={incrementStepNumber} className="nav-button next">Next</button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
};

export default NewListingsStep5;
