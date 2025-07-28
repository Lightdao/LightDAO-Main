import Empty from "../components/EmptyPage";
import ListingsListV1 from "../components/ListingsListV1";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./YourListingsPage.css";

const YourListings: React.FC<{}> = () => {
    const yourListings = [
        {
            name: "Election Season",
            category: "Art",
            blockchain: "Flow",
            bid: 0.45,
            views: 4915,
            auction: true,
            image: "/election season.png"
        },
        {
            name: "Lorr's Ad Issues",
            category: "Collectibles",
            blockchain: "Tezos",
            bid: 5.13,
            views: 4570,
            auction: false,
            image: "/tracking on the go.png"
        },
        {
            name: "Science Jobs",
            category: "Photography",
            blockchain: "Ethereum",
            bid: 3.59,
            views: 4310,
            auction: false,
            image: "/personNFT.png"
        },
        {
            name: "Capturing Memories",
            category: "Collectibles",
            blockchain: "Flow",
            bid: 0.45,
            views: 3905,
            auction: true,
            image: "/behind.png"
        },
        {
            name: "Tracking on the Go",
            category: "Art",
            blockchain: "Tezos",
            bid: 3.40,
            views: 3570,
            auction: false,
            image: "/tracking on the go.png"
        }
    ];

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
                    <ListingsListV1 listingList={yourListings}/>
                }
            </div>
            <MainFooter />
        </>
    );
}

export default YourListings;