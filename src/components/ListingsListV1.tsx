import React from 'react';
import './ListingsListV1.css';

//TODO: make the table data into props
const ListingsListV1: React.FC = () => {
  return (
    <div className="listings-list-v1">
      <div className="listings-table">
        <div className="listings-table-header">
          <span>Name</span>
          <span>Category</span>
          <span>Blockchain</span>
          <span>Bid</span>
          <span>Views</span>
          <span>Auction</span>
        </div>
        <div className="listings-table-row">
          <span>Election Season</span>
          <span>Art</span>
          <span>Flow</span>
          <span>0.45 Sd</span>
          <span>4,918</span>
          <span>Running</span>
        </div>
        <div className="listings-table-row">
          <span>Lon’t Ad Issues</span>
          <span>Collections</span>
          <span>Tears</span>
          <span>5.13 Sd</span>
          <span>4,570</span>
          <span></span>
        </div>
        <div className="listings-table-row">
          <span>Science Jobs</span>
          <span>Photography</span>
          <span>Emerson</span>
          <span>3.89 Sd</span>
          <span>4,310</span>
          <span></span>
        </div>
        <div className="listings-table-row">
          <span>Capturing Memories</span>
          <span>Collections</span>
          <span>Flow</span>
          <span>0.45 Sd</span>
          <span>3,909</span>
          <span>Running</span>
        </div>
        <div className="listings-table-row">
          <span>Tracking on the Go</span>
          <span>Art</span>
          <span>Tears</span>
          <span>3.40 Sd</span>
          <span>3,570</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ListingsListV1;
