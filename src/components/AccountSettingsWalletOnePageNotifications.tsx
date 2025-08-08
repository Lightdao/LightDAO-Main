import React from 'react';
import { useState } from 'react';
import "./AccountSettingsWalletOnePageNotifications.css";
import { ChangePageProps } from "../pages/AccountSettingsPage";


interface Preference {
  label: string;
  description: string;
  key: string;
}

const preferences: Preference[] = [
  {
    key: 'productUpdates',
    label: 'Product updates',
    description: 'Offer Notifications',
  },
  {
    key: 'reminders',
    label: 'Reminders',
    description: 'Auctions',
  },
  {
    key: 'promotions',
    label: 'Promotions and tips',
    description: 'Sales',
  },
  {
    key: 'accountSupport',
    label: 'Account support',
    description: 'Spotlighted',
  },
];

const AccountSettingsWalletOnePageNotifications: React.FC<ChangePageProps> = ({changeSettingsPageHandler}) => {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    productUpdates: true,
    reminders: true,
    promotions: true,
    accountSupport: true,
  });
  
  const toggleSwitch = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  
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
      <div className="wallet-settings-preference-list">
        {preferences.map((pref) => (
          <div key={pref.key} className="wallet-settings-preference-item">
            <div className="wallet-settings-preference-labels">
              <span className="wallet-settings-preference-subtitle">{pref.label}</span>
              <span className="wallet-settings-preference-title">{pref.description}</span>
            </div>
            <div
              className={`wallet-settings-toggle-switch ${toggles[pref.key] ? 'on' : 'off'}`}
              onClick={() => toggleSwitch(pref.key)}
            >
              <div className="wallet-settings-toggle-circle" />
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button className="publish">Publish</button>
        <button className="discard">Discard all</button>
      </div>
    </div>
  );
};

export default AccountSettingsWalletOnePageNotifications;
