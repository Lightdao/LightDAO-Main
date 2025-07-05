import React from 'react';
import './AccountSettingsProfileOnePage.css';

const AccountSettingsProfileOnePage: React.FC = () => {
  return (
    <div className="account-settings-profile">
      <h1>Account Settings</h1>
      <p>Manage your account profile</p>
      <div className="tabs">
        <button>Profile</button>
        <button>Wallet</button>
        <button>Notifications</button>
      </div>
      <div className="banner-upload">
        <p>Banner</p>
        <p>Recommended size: 1440×460px, 5mb max size</p>
        <div className="upload-box">Drag your item to upload</div>
      </div>
      <div className="avatar-upload">
        <p>Avatar</p>
        <p>Recommended 500×500, 2.5mb max size</p>
      </div>
      <form className="account-form">
        <label>Email<input type="email" placeholder="e.g. Please provide your email" /></label>
        <label>Username*<input type="text" placeholder="e.g. Please pick your username" /></label>
        <label>Link*<input type="text" placeholder="e.g. Please provide a link name" /></label>
        <label>Add a bio<input type="text" placeholder="e.g. Please provide a link name" /></label>
        <p>1500 characters remaining</p>
        <label>Website<input type="text" /></label>
        <label>X(Twitter)<input type="text" /></label>
        <label>Discord<input type="text" /></label>
      </form>
      <div className="buttons">
        <button className="publish">Publish</button>
        <button className="discard">Discard all</button>
      </div>
      <footer className="footer">
        <div className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">API</a>
          <span>© 2024 LightDao All rights reserved</span>
        </div>
        <div className="footer-buttons">
          <button>Currency - USD</button>
          <button>English</button>
        </div>
      </footer>
    </div>
  );
};

export default AccountSettingsProfileOnePage;
