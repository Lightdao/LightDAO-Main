import Empty from "../components/EmptyPage";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import ProposalList from "../components/ProposalList";
import "./YourProposalsPage.css";

//NOTE: may need clarification on what this page is for
const YourProposals: React.FC<{}> = () => {
    const YourProposals = [{}];
    
    return (
        <>
            <MainHeader />
            <MainSideBar sidebarNumber={MainPageToLoad.YourProposals} />
            <div className="proposals-content">
                <h1>Your Proposals</h1>
                {
                    YourProposals.length === 0 ?
                    <Empty emptyHeader="No proposals found" buttonText="Post your first NFT" navigationLink="/" />
                    :
                    <ProposalList />
                }
            </div>
            <MainFooter />
        </>
    );
}

export default YourProposals;