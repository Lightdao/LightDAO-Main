import "./DashboardCard.css";

interface DashboardCardInformation {
    name: string;
    value: string;
    metric: string;
    percentageGain: number;
}

const DashboardCard: React.FC<DashboardCardInformation> = ({name, value, metric, percentageGain}) => {
    return (
        <div className="dashboard-card">
            <p>{name}</p>
            <h3>{value}</h3>
            <div className="dashboard-card-metrics">
                <p>{metric}</p>
                <p>{percentageGain}</p>
            </div>
        </div>
    );
}

export default DashboardCard;