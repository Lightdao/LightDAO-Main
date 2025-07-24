import "./MainSideBar.css";

export enum MainPageToLoad {
    Dashboard,
    YourCollections,
    YourListings,
    YourProposals,
    Favorites,
    Following,
    Payouts,
    AccountDetails,
    Security,
    Apps,
    Notifications,
    HelpCenter
}

interface MainSidebarNumber {
    sidebarNumber: number;
}

const MainSideBar: React.FC<MainSidebarNumber> = ({sidebarNumber}) => {
    return (
        <aside className="sidebar">
            <ul>
                <div className="sidebar-header">Manage listings</div>
                <li className={sidebarNumber === MainPageToLoad.Dashboard ? "sidebar-item active" : "sidebar-item"}>
                    <a href="/Dashboard">Dashboard</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.YourCollections ? "sidebar-item active" : "sidebar-item"}>
                    <a href="/YourCollections">Your Collections</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.YourListings ? "sidebar-item active" : "sidebar-item"}>
                    <a href="/YourListings">Your Listings</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.YourProposals ? "sidebar-item active" : "sidebar-item"}>
                    <a href="#">Your Proposals</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.Favorites ? "sidebar-item active" : "sidebar-item"}>
                    <a href="/Favorites">Favorites</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.Following ? "sidebar-item active" : "sidebar-item"}>
                    <a href="#">Following</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.Payouts ? "sidebar-item active" : "sidebar-item"}>
                    <a href="#">Payouts</a>
                </li>
                <div className="sidebar-header">Profile settings</div>
                <li className={sidebarNumber === MainPageToLoad.AccountDetails ? "sidebar-item active" : "sidebar-item"}>
                    <a href="/AccountSettings">Account Details</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.Security ? "sidebar-item active" : "sidebar-item"}>
                    <a href="#">Security</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.Apps ? "sidebar-item active" : "sidebar-item"}>
                    <a href="#">Apps</a></li>
                <li className={sidebarNumber === MainPageToLoad.Notifications ? "sidebar-item active" : "sidebar-item"}>
                    <a href="#">Notifications</a>
                </li>
                <li className={sidebarNumber === MainPageToLoad.HelpCenter ? "sidebar-item active" : "sidebar-item"}>
                    <a href="/HelpCenter">Help Center</a>
                </li>
            </ul>
        </aside>
    );
}

export default MainSideBar;