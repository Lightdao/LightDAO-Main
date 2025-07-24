import Empty from "../components/EmptyPage";
import ListingsCollections from "../components/ListingsCollections";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./YourCollectionsPage.css";

const YourCollections: React.FC<{}> = () => {
    const yourCollections = [{}];
    
    return (
        <>
            <MainHeader />
            <MainSideBar sidebarNumber={MainPageToLoad.YourCollections} />
            <div className="collections-content">
                <h1>Your Collections</h1>
                {
                    yourCollections.length === 0 ?
                    <Empty emptyHeader="No NFTs found" buttonText="Buy your first NFT" navigationLink="/Marketplace" />
                    :
                    <ListingsCollections />
                }
            </div>
            <MainFooter />
        </>
    );
}

export default YourCollections;