import "./NavigationFooter.css";

const NavigationFooter: React.FC = () => {
  //TODO: link navigation for footer
  return (
    <footer className="landingpage-footer">
      <div className="landingpage-footer-content">
        <div className="landingpage-footer-column landingpage-footer-subscribe">
          <div>
            <h3 className="landingpage-footer-title">Subscribe to updates</h3>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="landingpage-footer-input"
            />
          </div>
          <div className="landingpage-footer-follow">
            <h3 className="landingpage-footer-title">Follow us</h3>
            <div className="landingpage-footer-social">
              <a href="#" className="landingpage-footer-social-icon">
                f
              </a>
              <a href="#" className="landingpage-footer-social-icon">
                🐦
              </a>
              <a href="#" className="landingpage-footer-social-icon">
                P
              </a>
              <a href="#" className="landingpage-footer-social-icon">
                in
              </a>
            </div>
          </div>
        </div>
        <div className="landingpage-footer-column landingpage-footer-marketplace">
          <h3 className="landingpage-footer-title">Marketplace</h3>
          <ul className="landingpage-footer-links">
            <li>
              <a href="/Marketplace">Explore</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Become a Partner</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Platform Status</a>
            </li>
          </ul>
        </div>
        <div className="landingpage-footer-column landingpage-footer-apply">
          <h3 className="landingpage-footer-title">Apply</h3>
          <ul className="landingpage-footer-links">
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Favorites</a>
            </li>
            <li>
              <a href="#">Watchlist</a>
            </li>
            <li>
              <a href="#">My Collections</a>
            </li>
            <li>
              <a href="#">Rankings</a>
            </li>
            <li>
              <a href="#">Activity</a>
            </li>
          </ul>
        </div>
        <div className="landingpage-footer-column landingpage-footer-region">
          <h3 className="landingpage-footer-title">Region</h3>
          <p className="landingpage-footer-description">
            The world's first marketplace for collectibles and non-fungible
            tokens NFTs where anything is possible and all are welcome
          </p>
          <select className="landingpage-footer-select">
            <option>Currency - USD</option>
          </select>
        </div>
      </div>
      <div className="landingpage-footer-bottom">
        <div className="landingpage-footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">API</a>
          <span className="landingpage-footer-copyright">
            © 2024 Lightdan All rights reserved
          </span>
        </div>
        <select className="landingpage-footer-language">
          <option>English</option>
        </select>
      </div>
    </footer>
  );
};

export default NavigationFooter;
