import React from 'react';
import './Payoutslistv1.css';

const PayoutsListv1: React.FC = () => {
  return (
    <div className="payouts-list">
      <div className="payouts-table-header">
        <span>Name</span>
        <span>Price</span>
        <span>Fee</span>
        <span>Qty</span>
        <span>Payout</span>
        <span>Status</span>
      </div>
      <div className="payout-item">
        <img src="/behind.png" alt="NFT 1" className="nft-image" />
        <span className="name">May Bring Back</span>
        <span className="price">0.45 Sol</span>
        <span className="fee">0.04 Sol</span>
        <span className="qty">1</span>
        <span className="payout">$10.00 USD</span>
        <span className="status pending">Pending</span>
      </div>
      <div className="payout-item">
        <img src="/behind.png" alt="NFT 2" className="nft-image" />
        <span className="name">Capturing Memories</span>
        <span className="price">5.13 Sol</span>
        <span className="fee">0.51 Sol</span>
        <span className="qty">1</span>
        <span className="payout">$14.50 USD</span>
        <span className="status pending">Pending</span>
      </div>
      <div className="payout-item">
        <img src="/behind.png" alt="NFT 3" className="nft-image" />
        <span className="name">Agents Were Behind</span>
        <span className="price">3.59 Sol</span>
        <span className="fee">0.36 Sol</span>
        <span className="qty">1</span>
        <span className="payout">$418.50 USD</span>
        <span className="status paid">Paid</span>
      </div>
    </div>
  );
};

export default PayoutsListv1;
