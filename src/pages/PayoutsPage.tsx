import Empty from "../components/EmptyPage";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import PayoutsListv1 from "../components/Payoutslistv1";
import "./PayoutsPage.css";

const Payouts: React.FC<{}> = () => {
    const payoutsList = [];
    
    return (
        <>
            <MainHeader />
            <MainSideBar sidebarNumber={MainPageToLoad.Payouts} />
            <div className="payouts-content">
                <h1>Payouts</h1>
                {
                    payoutsList.length === 0 ?
                    <Empty emptyHeader="No processed payouts" buttonText="List your first NFT" navigationLink="/Marketplace" />
                    :
                    <PayoutsListv1 />
                }
            </div>
            <MainFooter />
        </>
    );
}

export default Payouts;