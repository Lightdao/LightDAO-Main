import Empty from "../components/EmptyPage";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import PayoutsListv1 from "../components/Payoutslistv1";
import "./PayoutsPage.css";

const Payouts: React.FC<{}> = () => {
    const payoutsList = [
        {
            name: "May Bring Back",
            price: 0.45,
            fee: 0.04,
            quantity: 1,
            payout: 10.00,
            paidStatus: false,
            image: "/tracking on the go.png"
        },
        {
            name: "Capturing Memories",
            price: 5.13,
            fee: 0.51,
            quantity: 1,
            payout: 14.50,
            paidStatus: false,
            image: "/capturing memories.png"
        },
        {
            name: "Agents Were Behind",
            price: 3.59,
            fee: 0.36,
            quantity: 1,
            payout: 418.50,
            paidStatus: true,
            image: "/Ring.png"
        },
        {
            name: "Farhad's and Mike",
            price: 0.45,
            fee: 0.04,
            quantity: 1,
            payout: 15.00,
            paidStatus: true,
            image: "/behind.png"
        },
        {
            name: "Improving Culture",
            price: 3.40,
            fee: 0.34,
            quantity: 1,
            payout: 29.00,
            paidStatus: true,
            image: "/behind.png"
        },
        {
            name: "Cloud Computing",
            price: 3.40,
            fee: 0.34,
            quantity: 1,
            payout: 15.00,
            paidStatus: true,
            image: "/cube.png"
        }
    ];
    
    return (
        <>
            <MainHeader />
            <MainSideBar sidebarNumber={MainPageToLoad.Payouts} />
            <div className="payouts-content">
                <h1>Your Payouts</h1>
                {
                    payoutsList.length === 0 ?
                    <Empty emptyHeader="No processed payouts" buttonText="List your first NFT" navigationLink="/Marketplace" />
                    :
                    <PayoutsListv1 payoutList={payoutsList} />
                }
            </div>
            <MainFooter />
        </>
    );
}

export default Payouts;