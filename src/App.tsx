import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingV from "./pages/LandingV";
import Donor00A from "./pages/Donor00A";
import Donor01A from "./pages/Donor01A";
import Login from "./pages/login";
import AccountSettings from "./pages/AccountSettingsPage";
import HelpCenterHome from "./pages/HelpCenterHome";
import HelpCenterPost from "./pages/HelpCenterPost";
import HelpCenterCategory from "./pages/HelpCenterCategory";
import Collections from "./pages/CollectionsPage";

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
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingV />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AccountSettings" element={<AccountSettings />} />
      <Route path="/HelpCenter" element={<HelpCenterHome />} />
      <Route path="/HelpCenterPost" element={<HelpCenterPost />} />
      <Route path="/HelpCenterCategory" element={<HelpCenterCategory />} />
      <Route path="/Donor00A" element={<Donor00A />} />
      <Route path="/Donor01A" element={<Donor01A />} />
      <Route path="/Collections" element={<Collections />} />
    </Routes>
  );
}
export default App;
