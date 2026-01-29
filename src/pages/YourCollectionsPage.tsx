import Empty from "../components/EmptyPage";
import ListingsCollections from "../components/ListingsCollections";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./YourCollectionsPage.css";

const YourCollections: React.FC<{}> = () => {
  const yourCollections = [
    { name: "May Bring Back", numItems: 10, image: "/Tracking2x.png" },
    { name: "Auto Technology", numItems: 132, image: "/Ring.png" },
    { name: "Front Desk", numItems: 86, image: "/cloudNFT.png" },
    { name: "Farhad's and Mike", numItems: 28, image: "/cube.png" },
    { name: "Walgreens Chief", numItems: 66, image: "/Tracking2x.png" },
    { name: "Improving Culture", numItems: 164, image: "/Tracking2x.png" },
  ];

  return (
    <>
      <MainHeader />
      <MainSideBar sidebarNumber={MainPageToLoad.YourCollections} />
      <div className="collections-content">
        <h1>Your Collections</h1>
        {yourCollections.length === 0 ? (
          <Empty
            emptyHeader="No NFTs found"
            buttonText="Buy your first NFT"
            navigationLink="/Marketplace"
          />
        ) : (
          <ListingsCollections collectionList={yourCollections} />
        )}
      </div>
      <MainFooter />
    </>
  );
};

export default YourCollections;
