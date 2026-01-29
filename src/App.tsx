import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingV from "./pages/LandingV";
import LandingPage from "./pages/LandingPage";
import Donor00A from "./pages/Donor00A";
import Donor01A from "./pages/Donor01A";
import Login from "./pages/Login";
import AccountSettings from "./pages/AccountSettingsPage";
import HelpCenterHome from "./pages/HelpCenterHome";
import HelpCenterPost from "./pages/HelpCenterPost";
import HelpCenterCategory from "./pages/HelpCenterCategory";
import Collections from "./pages/CollectionsPage";
import Dashboard from "./pages/DashboardPage";
import Favorites from "./pages/FavoritesPage";
import Marketplace from "./pages/MarketplacePage";
import Drops from "./pages/DropPage";
import Stats from "./pages/StatsPage";
import YourCollections from "./pages/YourCollectionsPage";
import YourListings from "./pages/YourListingsPage";
import Payouts from "./pages/PayoutsPage";
import YourProposals from "./pages/YourProposalsPage";
import NFTDetails from "./pages/NFTDetailsPage";
import NewListing from "./pages/NewListingPage";
import NewListingsOnePage from "./pages/NewListingsOnePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/LandingV" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/YourCollections" element={<YourCollections />} />
      <Route path="/YourListings" element={<YourListings />} />
      <Route path="/YourProposals" element={<YourProposals />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/Payouts" element={<Payouts />} />
      <Route path="/Marketplace" element={<Marketplace />} />
      <Route path="/AccountSettings" element={<AccountSettings />} />
      <Route path="/HelpCenter" element={<HelpCenterHome />} />
      <Route
        path="/HelpCenter/HelpCenterCategory"
        element={<HelpCenterCategory />}
      />
      <Route
        path="/HelpCenterHome/HelpCenterCategory/HelpCenterPost"
        element={<HelpCenterPost />}
      />
      <Route path="/Stats" element={<Stats />} />
      <Route path="/Drops" element={<Drops />} />
      <Route path="/Donor00A" element={<Donor00A />} />
      <Route path="/Donor01A" element={<Donor01A />} />
      <Route path="/Collections" element={<Collections />} />
      <Route path="/NFTDetails/:id" element={<NFTDetails />} />
      <Route path="/CreateListing" element={<NewListing />} />
      <Route path="/CreateListingOnePage" element={<NewListingsOnePage />} />
    </Routes>
  );
}
export default App;
