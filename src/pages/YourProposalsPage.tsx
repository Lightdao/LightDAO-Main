import Empty from "../components/EmptyPage";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import ProposalList from "../components/ProposalList";
import YourCollections from "./YourCollectionsPage";
import "./YourProposalsPage.css";

//NOTE: may need clarification on what this page is for
const YourProposals: React.FC<{}> = () => {
  const YourProposals = [
    {
      name: "Election Season",
      blockchain: "Solana",
      author: "Ivan Morais",
      authorIcon: "/Matilda Profile.png",
      price: 0.45,
      image: "/election season.png",
    },
    {
      name: "Lorr's Ad Issues",
      blockchain: "Solana",
      author: "Langke Zambo",
      authorIcon: "/Matilda Profile.png",
      price: 5.13,
      image: "/Lorr.png",
    },
    {
      name: "Venture Capitalist",
      blockchain: "Solana",
      author: "Cecilia Pozo",
      authorIcon: "/Matilda Profile.png",
      price: 3.59,
      image: "/venture.png",
    },
    {
      name: "Tracking on the Go",
      blockchain: "Solana",
      author: "Matilda Evans",
      authorIcon: "/Matilda Profile.png",
      price: 0.45,
      image: "/tracking on the go.png",
    },
    {
      name: "Behind One of Hacks",
      blockchain: "Solana",
      author: "Maeng Yeo-Jin",
      authorIcon: "/Matilda Profile.png",
      price: 3.4,
      image: "/behind.png",
    },
    {
      name: "Capturing Memories",
      blockchain: "Solana",
      author: "Lungelo Ngoaba",
      authorIcon: "/Matilda Profile.png",
      price: 3.4,
      image: "/cube.png",
    },
  ];

  return (
    <>
      <MainHeader />
      <MainSideBar sidebarNumber={MainPageToLoad.YourProposals} />
      <div className="proposals-content">
        <h1>Your Proposals</h1>
        {YourProposals.length === 0 ? (
          <Empty
            emptyHeader="No proposals found"
            buttonText="Post your first NFT"
            navigationLink="/"
          />
        ) : (
          <ProposalList proposalList={YourProposals} />
        )}
      </div>
      <MainFooter />
    </>
  );
};

export default YourProposals;
