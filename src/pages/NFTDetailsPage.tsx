import MainHeader from "../components/MainHeader";
import NFTDetailsActivity from "../components/NFTDetailsActivity";
import NFTDetailsMain from "../components/NFTDetailsMain";
import NFTDetailsRelated from "../components/NFTDetailsRelated";
import NFTDetailsV6 from "../components/NFTDetailsV6";
import "./NFTDetailsPage.css"

const NFTDetails: React.FC<{}> = () => {
    return (
        <div className="NFT-Details-page">
            <MainHeader />
            <div className="NFT-Details-grid">
                <NFTDetailsMain />
            </div>
            <NFTDetailsRelated />
        </div>
    );
}

export default NFTDetails;