import DropBanner from "../components/DropBanner";
import MainHeader from "../components/MainHeader";
import DropDetails from "../components/DropDetails";
import DropNFTGrid from "../components/DropNFTGrid";
import MainFooter from "../components/MainFooter";
import "./DropPage.css";

const Drops: React.FC<{}> = () => {
    const nfts = [
        { id: 1, name: "Lion of Judah", price: "10.0 Sol", img: "/Lion.png" },
        { id: 2, name: "Auto Technology", price: "7 Sol", img: "/Lion.png" },
        { id: 3, name: "Agents Were Behind", price: "17.5 Sol", img: "Lion2.png" },
        { id: 4, name: "Front Desk", price: "3 Sol", img: "/Gloves.png" },
        { id: 5, name: "Farhad's and Mike", price: "0.05 Sol", img: "/Bird.png"},
        { id: 6, name: "Walgreens Chief", price: "0.58 Sol", img: "/SnakeKiller.png" },
        { id: 7, name: "Improving Culture", price: "9 Sol", img: "/Lion.png" },
        { id: 8, name: "Cloud Computing", price: "0.09 Sol", img: "/Eagle.png" },
    ];
    
    return (
        <div className="drop-page">
            <MainHeader />
            <DropBanner />
            <DropDetails />
            <DropNFTGrid nftData={nfts}/>
        </div>
    );
}

export default Drops;