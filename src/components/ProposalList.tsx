import React from 'react';
import './ProposalList.css';

//TODO: make the table data into props
const ProposaList: React.FC = () => {
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

const ProposalList: React.FC<ProposalList> = ({proposalList}) => {
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
          <CreateProposalRows key={index} name={item.name} blockchain={item.blockchain} author={item.author} authorIcon={item.authorIcon} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

const CreateProposalRows: React.FC<ProposalListData> = ({name, blockchain, author, authorIcon, price, image}) => {
  return (
    <div className="proposal-table-row">
      <div className="proposal-table-item"><div><img className="proposal-table-project-image" src={image} alt={name + " icon"} />{name}</div></div>
      <div className="proposal-table-item"><div><img className="proposal-table-blockchain-image" src="/Solana.svg" alt="solana icon" />{blockchain}</div></div>
      <div className="proposal-table-item"><div><img className="proposal-table-author-image" src={authorIcon} alt={author} />{author}</div></div>
      <div className="proposal-table-item">{price} Sol</div>
    </div>
  );
}


export default ProposalList;
