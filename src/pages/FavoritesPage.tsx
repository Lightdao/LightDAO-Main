import Empty from "../components/EmptyPage";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./FavoritesPage.css";

const Favorites: React.FC<{}> = () => {
    const favoriteListings = [];
    
    return (
        <>
            <MainHeader />
            <MainSideBar sidebarNumber={MainPageToLoad.Favorites} />
            <div className="favorites-content">
                <h1>Favorites</h1>
                {
                    favoriteListings.length === 0 ?
                    <Empty emptyHeader="Favorite items not found" buttonText="Explore NFTs" navigationLink="/Marketplace" />
                    :
                    <></>
                }
            </div>
            <MainFooter />
        </>
    );
}

export default Favorites;