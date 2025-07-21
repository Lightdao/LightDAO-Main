import MainHeader from "../components/MainHeader";
import CollectionsBanner from "../components/CollectionsBanner";
import CollectionsFilters from "../components/CollectionsFilters";
import CollectionsNFTCard from "../components/CollectionsNFTCard";
import "./CollectionsPage.css";

//TODO: make this page look like it is supposed to
const Collections: React.FC<{}> = () =>
{
    //NOTE: CollectionsFooter.tsx is missing
    return (
        <div className="Collections">
            <MainHeader />
            <CollectionsBanner />
            <CollectionsFilters />
            <div className="collections-grid">
                <CollectionsNFTCard title={"name"} price={"10.5"} image="art@2x.png"/>
                <CollectionsNFTCard title={"name"} price={"10.5"} image="art@2x.png"/>
                <CollectionsNFTCard title={"name"} price={"10.5"} image="art@2x.png"/>
                <CollectionsNFTCard title={"name"} price={"10.5"} image="art@2x.png"/>
                <CollectionsNFTCard title={"name"} price={"10.5"} image="art@2x.png"/>
                <CollectionsNFTCard title={"name"} price={"10.5"} image="art@2x.png"/>
            </div>
            {/* missing footer */}
        </div>
    );
}

export default Collections;