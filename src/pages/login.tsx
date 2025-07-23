import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="left-pane">
        <h1>A highly-curated platform for creating, collecting unique Faith Driven NFTs</h1>
        <div className="image-circles">
          <div className="circle" style={{ backgroundImage: 'url(/path/to/image1.jpg)' }}></div>
          <div className="circle" style={{ backgroundImage: 'url(/path/to/image2.jpg)' }}></div>
          <div className="circle" style={{ backgroundImage: 'url(/path/to/image3.jpg)' }}></div>
          <div className="circle" style={{ backgroundImage: 'url(/path/to/image4.jpg)' }}></div>
          <div className="circle" style={{ backgroundImage: 'url(/path/to/image5.jpg)' }}></div>
          <div className="circle" style={{ backgroundImage: 'url(/path/to/image6.jpg)' }}></div>
          <div className="circle" style={{ backgroundImage: 'url(/path/to/image7.jpg)' }}></div>
        </div>
      </div>
      <div className="right-pane">
        <h2>LIGHTDAO</h2>
        <p>CONNECT YOUR WALLET</p>
        <p>Choose one of available wallet providers or create a new wallet. What is a wallet?</p>
        <div className="wallet-options">
          <button className="wallet-button">Phantom Wallet</button>
          <button className="wallet-button">Coinbase Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
