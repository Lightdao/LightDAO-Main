import "./NewListingTopBar.css";

const NewListingTopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="logo-circle">
        <div className="logo-shape" />
      </div>
      <a href="/Dashboard" className="cancel-button">
        Cancel
      </a>
    </div>
  );
};

export default NewListingTopBar;
