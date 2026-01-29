import DashboardCollections from "../components/DashboardCollections";
import DashboardSalesHistory from "../components/DashboardSalesHistory";
import DashboardSocialImpact from "../components/DashboardSocialImpact";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import MainSideBar, { MainPageToLoad } from "../components/MainSideBar";
import "./DashboardPage.css";
import DashboardCard from "../components/DashboardCard";

const Dashboard: React.FC = () => {
  return (
    <div className="main-dashboard">
      <MainHeader />
      <MainSideBar sidebarNumber={MainPageToLoad.Dashboard} />
      <div className="main-dashboard-content">
        <h1>Dashboard</h1>
        <div className="main-dashboard-grid">
          <DashboardCard
            name={"Overview"}
            value={"$96.4k"}
            metric={"Total volume"}
            percentageGain={+10}
          />
          <DashboardCard
            name={"Performance"}
            value={"4.950"}
            metric={"Transactions"}
            percentageGain={+8}
          />
          <DashboardCard
            name={"Conversion"}
            value={"2.148"}
            metric={"Sales"}
            percentageGain={+2}
          />
          <DashboardSalesHistory />
          <DashboardSocialImpact />
          <DashboardCollections />
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Dashboard;
