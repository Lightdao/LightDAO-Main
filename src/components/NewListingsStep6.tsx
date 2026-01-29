import React, { useState } from "react";
import { StepHandler } from "../pages/NewListingPage";
import "./NewListingsStep6.css";
import NewListingTopBar from "./NewListingTopBar";

interface Preference {
  label: string;
  description: string;
  key: string;
}

const preferences: Preference[] = [
  {
    key: "productUpdates",
    label: "Product updates",
    description: "Receive messages from our platform",
  },
  {
    key: "reminders",
    label: "Reminders",
    description: "Receive booking reminders, pricing notices",
  },
  {
    key: "promotions",
    label: "Promotions and tips",
    description: "Receive coupons, promotions, surveys",
  },
  {
    key: "policy",
    label: "Policy and community",
    description: "Receive updates on job regulations",
  },
  {
    key: "accountSupport",
    label: "Account support",
    description:
      "Receive messages about your account, your trips, legal alerts",
  },
];

const NewListingsStep6: React.FC<StepHandler> = ({
  incrementStepNumber,
  decrementStepNumber,
}) => {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    productUpdates: true,
    reminders: false,
    promotions: true,
    policy: true,
    accountSupport: false,
  });

  const toggleSwitch = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="step6-container">
      <NewListingTopBar />

      {/* Title */}
      <div className="step6-title">
        <h1 className="new-listing-title">Set preferences</h1>
        <p className="subtitle">
          They all serve the same purpose, but each one takes a different
          approach and makes different tradeoffs.
        </p>
      </div>

      {/* Preference List */}
      <div className="preference-list">
        {preferences.map((pref) => (
          <div key={pref.key} className="preference-item">
            <div className="preference-labels">
              <span className="preference-subtitle">{pref.label}</span>
              <span className="preference-title">{pref.description}</span>
            </div>
            <div
              className={`toggle-switch ${toggles[pref.key] ? "on" : "off"}`}
              onClick={() => toggleSwitch(pref.key)}
            >
              <div className="toggle-circle" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={decrementStepNumber} className="nav-button back">
          Back
        </button>
        <button onClick={incrementStepNumber} className="nav-button next">
          Next
        </button>
      </div>

      {/* Progress Bar */}
      <div className="step6-progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
};

export default NewListingsStep6;
