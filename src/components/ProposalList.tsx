import React from "react";
import "./ProposalList.css";

interface ProposalListData {
  name: string;
  blockchain: string;
  author: string;
  authorIcon: string;
  price: number;
  image: string;
}

interface ProposalList {
  proposalList: ProposalListData[];
}

const ProposalList: React.FC<ProposalList> = ({ proposalList }) => {
  return (
    <div className="proposal-list">
      <div className="proposal-table">
        <div className="proposal-table-header">
          <div>Name</div>
          <div>Blockchain</div>
          <div>Author</div>
          <div>Price</div>
        </div>
        {proposalList.map((item, index) => (
          <CreateProposalRows
            key={index}
            name={item.name}
            blockchain={item.blockchain}
            author={item.author}
            authorIcon={item.authorIcon}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

const CreateProposalRows: React.FC<ProposalListData> = ({
  name,
  blockchain,
  author,
  authorIcon,
  price,
  image,
}) => {
  return (
    <div className="proposal-table-row">
      <div className="proposal-table-item">
        <div>
          <img
            className="proposal-table-project-image"
            src={image}
            alt={name + " icon"}
          />
          {name}
        </div>
      </div>
      <div className="proposal-table-item">
        <div>
          <img
            className="proposal-table-blockchain-image"
            src="/Solana.svg"
            alt="solana icon"
          />
          {blockchain}
        </div>
      </div>
      <div className="proposal-table-item">
        <div>
          <img
            className="proposal-table-author-image"
            src={authorIcon}
            alt={author}
          />
          {author}
        </div>
      </div>
      <div className="proposal-table-item">{price} Sol</div>
    </div>
  );
};

export default ProposalList;
