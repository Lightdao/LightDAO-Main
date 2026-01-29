import React from "react";
import "./ListingsCollections.css";

interface CollectionItemInformation {
  name: string;
  numItems: number;
  image: string;
}

interface CollectionItemList {
  collectionList: CollectionItemInformation[];
}

const ListingsCollections: React.FC<CollectionItemList> = ({
  collectionList,
}) => {
  return (
    <div className="listings-collections">
      {collectionList.map((item, index) => (
        <IndividualCollectionItem
          key={index}
          name={item.name}
          numItems={item.numItems}
          image={item.image}
        />
      ))}
    </div>
  );
};

const IndividualCollectionItem: React.FC<CollectionItemInformation> = ({
  name,
  numItems,
  image,
}) => {
  return (
    <div className="listings-collections-item">
      <img src={image} alt="tracking logo" />
      <div className="listings-collections-item-data">
        <h2>{name}</h2>
        <p>
          <span>{numItems}</span> items
        </p>
      </div>
    </div>
  );
};

export default ListingsCollections;
