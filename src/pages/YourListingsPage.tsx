import Empty from "../components/EmptyPage";
import ListingsListV1 from "../components/ListingsListV1";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./YourListingsPage.css";

const YourListings: React.FC<{}> = () => {
    const yourListings = [{}];
    
    return (
        <>
            <MainHeader />
            <MainSideBar sidebarNumber={MainPageToLoad.YourListings} />
            <div className="listings-content">
                <h1>Your Listings</h1>
                {
                    yourListings.length === 0 ?
                    <Empty emptyHeader="No posted listings found" buttonText="Post your first NFT" navigationLink="/" />
                    :
                    <ListingsListV1 />
                }
            </div>
            <MainFooter />
        </>
    );
}

export default YourListings;