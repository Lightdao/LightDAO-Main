import React from "react";
import "./NewListingsOnePage.css";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const NewListingsOnePage: React.FC = () => {
  return (
    <div className="new-nft-page">
      <MainHeader />

      <main className="content">
        <h1>Add new NFT</h1>

        <section className="blockchain-section">
          <h2>Choose blockchain</h2>
          <p>
            Connect with one of our available wallet providers or create a new
            one.
          </p>
          <button className="solana-button">Solana</button>
        </section>

        <section className="item-type-section">
          <h2>Select item type</h2>
          <p>
            They all serve the same purpose, but each one takes a different
            approach and makes different tradeoffs.
          </p>
          <div className="item-type-buttons">
            <button className="item-type active">Create single item</button>
            <button className="item-type">Create collection</button>
          </div>
        </section>

        <section className="upload-section">
          <h2>Upload an item</h2>
          <p>
            But each one takes a different approach and makes different
            tradeoffs.
          </p>
          <div className="upload-box">
            <span className="upload-icon">⬆️</span>
            <p>Drag your item to upload</p>
            <small>PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.</small>
          </div>
        </section>

        <section className="form-section">
          <div className="form-group">
            <label>Name your item</label>
            <input
              type="text"
              placeholder="e.g. Redeemable T-Shirt with Logo"
            />
          </div>
          <div className="form-group">
            <label>Enter short description</label>
            <input
              type="text"
              placeholder="e.g. After purchase you will get a T-Shirt"
            />
          </div>
          <div className="form-group">
            <label>Add properties</label>
            <div className="tags">
              <span className="tag">Art</span>
              <span className="tag">Body type</span>
              <span className="tag">Face color</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Set item price or starting bid</label>
              <input type="text" placeholder="e.g. 0.01 Eth" />
            </div>
            <div className="form-group">
              <label>Select royalties amount, %</label>
              <input type="text" placeholder="Select desired amount" />
            </div>
          </div>
        </section>

        <section className="collection-section">
          <h2>Choose collection</h2>
          <div className="collection-options">
            <div className="collection-option">
              <div className="collection-art" />
              <div className="collection-details">
                <strong>Create new collection</strong>
                <small>Type to create</small>
              </div>
            </div>
            <div className="collection-option">
              <div className="collection-art" />
              <div className="collection-details">
                <strong>Battle for Digital</strong>
                <small>56 items</small>
              </div>
            </div>
          </div>
        </section>

        <section className="notifications-section">
          <h2>Choose collection</h2>
          <p>They all serve the same purpose.</p>
          <div className="notification-option">
            <div>
              <strong>Receive messages from our platform</strong>
              <p>Product updates</p>
            </div>
            <div className="switch on" />
          </div>
          <div className="notification-option">
            <div>
              <strong>Receive booking reminders, pricing notices</strong>
              <p>Reminders</p>
            </div>
            <div className="switch off" />
          </div>
          <div className="notification-option">
            <div>
              <strong>Receive coupons, promotions, surveys</strong>
              <p>Promotions and tips</p>
            </div>
            <div className="switch on" />
          </div>
          <div className="notification-option">
            <div>
              <strong>
                Receive messages about your account, your trips, legal alerts
              </strong>
              <p>Account support</p>
            </div>
            <div className="switch off" />
          </div>
        </section>

        <div className="form-actions">
          <button className="publish-button">Publish</button>
          <button className="discard-button">Discard all</button>
        </div>
      </main>

      <MainFooter />
    </div>
  );
};

export default NewListingsOnePage;
