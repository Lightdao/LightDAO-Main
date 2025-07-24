import MainHeader from "../components/MainHeader";
import CollectionsBanner from "../components/CollectionsBanner";
import CollectionsFilters from "../components/CollectionsFilters";
import CollectionsNFTCard from "../components/CollectionsNFTCard";
import "./CollectionsPage.css";

const Collections: React.FC<{}> = () =>
{
    const NFTCardData = [
        {title: "name1", price: "10.5", img: "art@2x.png"},
        {title: "name2", price: "10.5", img: "art@2x.png"},
        {title: "name3", price: "10.5", img: "art@2x.png"},
        {title: "name4", price: "10.5", img: "art@2x.png"},
        {title: "name5", price: "10.5", img: "art@2x.png"},
        {title: "name6", price: "10.5", img: "art@2x.png"},
    ];

    return (
        <div className="Collections">
            <MainHeader />
            <CollectionsBanner />
            <CollectionsFilters />
            <div className="collections-grid">
                {NFTCardData.map((item, index) => (
                    <CollectionsNFTCard key={index} title={item.title} price={item.price} image={item.img}/>
                ))}
            </div>
            {/* missing footer */}
        </div>
    );
}

export default Collections;