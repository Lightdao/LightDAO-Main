import React from 'react';
import "./AccountSettingsWalletOnePageNotifications.css";
import { ChangePageProps } from "../pages/AccountSettingsPage";

const AccountSettingsWalletOnePageNotifications: React.FC<ChangePageProps> = ({changeSettingsPageHandler}) => {
  return (
    <div className="wallet-settings-page">
      <h1>Account Settings</h1>
      <h2 className="header-sub">Manage your account profile</h2>
      <p className="p-sub">Connect with one of our available wallet providers or create a new one.</p>
      <div className="tabs">
        <button onClick={() => changeSettingsPageHandler(0)} className="tab">Profile</button>
        <button onClick={() => changeSettingsPageHandler(1)} className="tab">Wallet</button>
        <button onClick={() => changeSettingsPageHandler(2)} className="tab active">Notifications</button>
      </div>
      <hr />
      <h2 className="header-sub">Notifications</h2>
      <p className="p-sub">You could turn on/off notifications</p>
      <div className="buttons">
        <button className="publish">Publish</button>
        <button className="discard">Discard all</button>
      </div>
    </div>
  );
};

export default AccountSettingsWalletOnePageNotifications;
