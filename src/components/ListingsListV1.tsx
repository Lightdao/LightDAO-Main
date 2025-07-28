import React from 'react';
import './ListingsListV1.css';

interface ListingsListData {
  name: string;
  category: string;
  blockchain: string;
  bid: number;
  views: number;
  auction: boolean;
  image: string;
}

interface ListingsList {
  listingList: ListingsListData[];
}

const ListingsListV1: React.FC<ListingsList> = ({listingList}) => {
  return (
    <div className="listings-list-v1">
      <div className="listings-table">
        <div className="listings-table-header">
          <div>Name</div>
          <div>Category</div>
          <div>Blockchain</div>
          <div>Bid</div>
          <div>Views</div>
          <div>Auction</div>
        </div>
        {listingList.map((item, index) => (
          <CreateListingRows key={index} name={item.name} category={item.category} blockchain={item.blockchain} bid={item.bid} views={item.views} auction={item.auction} image={item.image} />
        ))}
      </div>
    </div>
  );
};

const CreateListingRows: React.FC<ListingsListData> = ({name, category, blockchain, bid, views, auction, image}) => {
  return (
    <div className="listings-table-row">
      <div className="listings-table-item"><div><img src={image} alt={name + " icon"} />{name}</div></div>
      <div className="listings-table-item">{category}</div>
      <div className="listings-table-item">{blockchain}</div>
      <div className="listings-table-item">{bid} Sol</div>
      <div className="listings-table-item">{views}</div>
      <div className="listings-table-item">{auction ? <div className="listing-table-item-auction"><div className="auction-icon"></div>Running</div> : ""}</div>
    </div>
  );
}

export default ListingsListV1;
