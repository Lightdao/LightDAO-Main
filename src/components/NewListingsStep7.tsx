import React from 'react';
import './NewListingsStep7.css';
import NewListingTopBar from './NewListingTopBar';
import { ImageData, NftMetaData } from '../pages/NewListingPage';

//comment since moved this to backend for now (maybe permanently)
//import { generateSigner, createSignerFromKeypair, signerIdentity, publicKey, createGenericFile } //from '@metaplex-foundation/umi';
//import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
//import { createCollectionV1, createV1, fetchCollectionV1 } from '@metaplex-foundation/mpl-core';
import { base58 } from '@metaplex-foundation/umi/serializers';
//import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
//import wallet from "../../wallet.json";

async function mintNFT(selectedImage: File | null, data: NftMetaData)
{
    let collectionKey: string = "7qWXUxp13FVVo6s9qUF8DYBfBEaaCvp4aGTybJXxfBgy";
    console.log(data.name);

    //convert selectedImage to GenericFile type since that is what Metaplex uses
    if (!selectedImage)
        return;

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", String(data.price));
    
    //this will be default route if no collection is selected
    let route = "http://localhost:4000/mint-nft";

    if (data.collection !== "")
    {
        route = "http://localhost:4000/mint-nft-collection"
        formData.append("key", collectionKey);
        console.log("minting nft into collection");
    }

    const res = await fetch(route, {
        method: "POST",
        body: formData,
    });

    const transactionData = await res.json();
    console.log("Mint result:", transactionData);
    console.log("Mint result sig:", transactionData.txSignature);
    const sigArray = new Uint8Array(Object.values(transactionData.txSignature));
    console.log("Mint result link: https://solana.fm/tx/" + base58.deserialize(sigArray)[0] + "?cluster=devnet-alpha");

    //console.log("NFT created: https://solana.fm/tx/" + base58.deserialize(data.txSignature.signature)[0] + "?cluster=devnet-alpha");
}

const NewListingsStep7: React.FC<ImageData> = ({ selectedImage, imagePreviewUrl, data }) => {
    return (
        <div className="step7-container">
            <NewListingTopBar />

            {/* Title */}
            <div className="step7-title">
                <h1 className="new-listing-title">Ready to publish?</h1>
                <p className="subtitle">
                    They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
                </p>
            </div>

            {/* Preview Card */}
            <div className="preview-card">
                <img className="author-avatar" src="/Matilda Profile.png" alt="author icon" />
                {(imagePreviewUrl != null) ? <img className="artwork" src={imagePreviewUrl} alt="User Selected Image" /> : ""}
                <h6 className="item-title">{data.name}</h6>
                <div className="item-price">
                    <img className="solana-icon" src="Solana.svg" alt="solana icon" />
                    <span className="price-label">from</span>
                    <span className="price-value">{data.price} Sol</span>
                </div>
            </div>

            {/* Publish Button */}
            <button onClick={() => mintNFT(selectedImage, data)} className="publish-button">Publish</button>

            {/* Progress Bar */}
            <div className="step7-progress-bar">
                <div className="progress-fill" />
            </div>
        </div>
    );
};

export default NewListingsStep7;
