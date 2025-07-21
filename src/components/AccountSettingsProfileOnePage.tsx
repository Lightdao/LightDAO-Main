import React from 'react';
import './AccountSettingsProfileOnePage.css';
import { ChangePageProps } from '../pages/AccountSettingsPage';

const AccountSettingsProfileOnePage: React.FC<ChangePageProps> = ({changeSettingsPageHandler}) => {
  return (
    <div className="account-settings-profile">
      <h1>Account Settings</h1>
      <h2 className="header-sub">Manage your account profile</h2>
      <p className="p-sub">Connect with one of our available wallet providers or create a new one.</p>
      <div className="tabs">
        <button onClick={() => changeSettingsPageHandler(0)} className="tab active">Profile</button>
        <button onClick={() => changeSettingsPageHandler(1)} className="tab">Wallet</button>
        <button onClick={() => changeSettingsPageHandler(2)} className="tab">Notifications</button>
      </div>

      <hr />

      <div className="banner-upload">
        <h2 className="header-sub">Banner</h2>
        <p className="p-sub">Recommended size: 1440x460px, 5mb max size</p>
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
    </div>
  );
};

export default AccountSettingsProfileOnePage;
