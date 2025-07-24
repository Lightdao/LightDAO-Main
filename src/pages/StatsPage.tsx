import MainHeader from "../components/MainHeader";
import StatsTable from "../components/StatsTable";
import "./StatsPage.css";

const Stats: React.FC<{}> = () => {
    return (
        <div className="stats-page">
            <MainHeader />
            <StatsTable />
        </div>
    );
}

export default Stats;