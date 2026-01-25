import React, { useState } from 'react';
import { NftHandles } from '../pages/NewListingPage';
import './NewListingsStep5.css';
import NewListingTopBar from './NewListingTopBar';
import { base58 } from '@metaplex-foundation/umi/serializers';

interface CollectionItem 
{
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

//TODO: add function that lets you make a collection or lead to the create a collection page
async function MakeCollection()
{
    console.log("collection being created");
    const res = await fetch("http://localhost:4000/create-collection", {
        method: "POST",
        body: "",
    });

    const data = await res.json();
    console.log("Mint result:", data);
    console.log("Mint result sig:", data.txSignature);
    const sigArray = new Uint8Array(Object.values(data.txSignature));
    console.log("Mint result link: https://solana.fm/tx/" + base58.deserialize(sigArray)[0] + "?cluster=devnet-alpha");
}

//TODO: add a way to grab all collections owned by a particular wallet
//TODO: add a way for the user to select a collection and add nfts to it

const NewListingsStep5: React.FC<NftHandles> = ({ incrementStepNumber, decrementStepNumber, data, handleInputChange }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className="step5-container">
            <NewListingTopBar />

            {/* Title */}
            <div className="step5-title">
                <h1 className="new-listing-title">Choose collection</h1>
                <p className="subtitle">
                    They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
                </p>
            </div>

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
                                <div className="new-image-placeholder">+</div>
                            )}
                        </div>
                        <div className="collection-details">
                            <h6>{collection.title}</h6>
                            {collection.id !== 'new' && <p>{collection.items} items</p>}
                        </div>
                        <button className="select-button" onClick={MakeCollection}>Select</button>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
                <button onClick={decrementStepNumber} className="nav-button back">Back</button>
                <button onClick={incrementStepNumber} className="nav-button next">Next</button>
            </div>

            {/* Progress Bar */}
            <div className="step5-progress-bar">
                <div className="progress-fill" />
            </div>
        </div>
    );
};

export default NewListingsStep5;
