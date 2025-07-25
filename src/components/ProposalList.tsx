import React from 'react';
import './ProposalList.css';

//TODO: make the table data into props
const ProposalList: React.FC = () => {
  return (
    <div className="proposal-list">
      <div className="proposal-table">
        <div className="proposal-table-header">
          <span>Name</span>
          <span>Blockchain</span>
          <span>Author</span>
          <span>Price</span>
        </div>
        <div className="proposal-table-row">
          <span>Election Season</span>
          <span>Solana</span>
          <span>Ivan Morais</span>
          <span>0.45 Sol</span>
        </div>
        <div className="proposal-table-row">
          <span>Lorr's Ad Issues</span>
          <span>Solana</span>
          <span>Langke Zambo</span>
          <span>5.13 Sol</span>
        </div>
        <div className="proposal-table-row">
          <span>Venture Capitalist</span>
          <span>Solana</span>
          <span>Cecilia Pozo</span>
          <span>3.59 Sol</span>
        </div>
        <div className="proposal-table-row">
          <span>Tracking on the Go</span>
          <span>Solana</span>
          <span>Matilda Evans</span>
          <span>0.45 Sol</span>
        </div>
        <div className="proposal-table-row">
          <span>Behind One of Hacks</span>
          <span>Solana</span>
          <span>Maeng Yeo-Jin</span>
          <span>3.40 Sol</span>
        </div>
        <div className="proposal-table-row">
          <span>Capturing Memories</span>
          <span>Solana</span>
          <span>Lungelo Ngoaba</span>
          <span>3.40 Sol</span>
        </div>
      </div>
    </div>
  );
};

export default ProposalList;
