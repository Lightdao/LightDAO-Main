import React from 'react';
import './AccountSettingsWalletOnePage.css';
import { ChangePageProps } from '../pages/AccountSettingsPage';

const AccountSettingsWalletOnePage: React.FC<ChangePageProps> = ({changeSettingsPageHandler}) => {
  return (
    <div className="account-settings-wallet">
      <h1>Account Settings</h1>
      <h2 className="header-sub">Manage your account profile</h2>
      <p className="p-sub">Connect with one of our available wallet providers or create a new one.</p>
      <div className="tabs">
        <button onClick={() => changeSettingsPageHandler(0)} className="tab">Profile</button>
        <button onClick={() => changeSettingsPageHandler(1)} className="tab active">Wallet</button>
        <button onClick={() => changeSettingsPageHandler(2)} className="tab">Notifications</button>
      </div>
      
      <hr />

      <div className="wallet-section">
        <h2 className="header-sub">Manage wallets</h2>
        <p className="p-sub">If you use more than one wallet, you can link them below to access your account. This also allows you to showcase all your artworks in one place.</p>

        <div className="wallet-settings-card">
          <div className="wallet-info">
            <p><strong>Wallet</strong></p>
            <p>4N...tVZ1</p>
            <p><strong>3.05697 SOL</strong></p>
          </div>
          <div className="divider" />
          <button className="link-wallet">
            <span className="icon">⚙️</span>
            Link another wallet
          </button>
        </div>
      </div>

      <div className="buttons">
        <button className="publish">Publish</button>
        <button className="discard">Discard all</button>
      </div>
    </div>
  );
};

export default AccountSettingsWalletOnePage;
