import FavoritesEmpty from "../components/FavoritesEmpty";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./FavoritesPage.css";

const Favorites: React.FC<{}> = () => {
    return (
        <>
            <MainHeader />
            <MainSideBar sidebarNumber={MainPageToLoad.Favorites} />
            <div className="favorites-content">
                <FavoritesEmpty />
            </div>
            <MainFooter />
        </>
    );
}

export default Favorites