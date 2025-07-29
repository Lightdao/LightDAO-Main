import React from 'react';
import './Payoutslistv1.css';

interface PayoutListData {
  name: string;
  price: number;
  fee: number;
  quantity: number;
  payout: number;
  paidStatus: boolean;
  image: string;
}

interface PayoutList {
  payoutList: PayoutListData[];
}

const PayoutsListv1: React.FC<PayoutList> = ({payoutList}) => {
  return (
    <div className="payout-list">
      <div className="payout-table">
        <div className="payout-table-header">
          <div>Name</div>
          <div>Price</div>
          <div>Fee</div>
          <div>Qty</div>
          <div>Payout</div>
          <div>Status</div>
        </div>
        {payoutList.map((item, index) => (
          <CreatepayoutRows key={index} name={item.name} price={item.price} fee={item.fee} quantity={item.quantity} payout={item.payout} paidStatus={item.paidStatus} image={item.image} />
        ))}
      </div>
    </div>
  );
};

const CreatepayoutRows: React.FC<PayoutListData> = ({name, price, fee, quantity, payout, paidStatus, image}) => {
  return (
    <div className="payout-table-row">
      <div className="payout-table-item"><div><img className="payout-table-project-image" src={image} alt={name + " icon"} />{name}</div></div>
      <div className="payout-table-item">{price} Sol</div>
      <div className="payout-table-item">{fee}</div>
      <div className="payout-table-item">{quantity}</div>
      <div className="payout-table-item">${payout} USD</div>
      <div className="payout-table-item">{paidStatus ? <div className="payout-table-project-item-status"><div className="payout-table-project-item-paid"></div>Paid</div> : <div className="payout-table-project-item-status"><div className="payout-table-project-item-pending"></div>Pending</div>}</div>
    </div>
  );
}

export default PayoutsListv1;