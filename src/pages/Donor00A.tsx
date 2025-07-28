import DonorSideBar from "../components/DonorSideBar";
import { PageToLoad } from "../components/DonorSideBar";
import { HeaderBar } from "../components/DonorHeader";
import { GetAttachmentIcons } from "../components/DonorAttachments";
import MainFooter from "../components/MainFooter";
import "./Donor.css";

const Donor00A: React.FC<{}> = () => {

    return (
        <div className="donor-00A">
            <HeaderBar />
            <div className="barpage">
                <DonorSideBar sidebarNumber={PageToLoad.Dashboard} />
                <DonorDashboard />
            </div>
            <MainFooter />
        </div>
    );
}

const RecommendedProjects: React.FC<{}> = () => {

    let tableList = [
    {
        id: 1,
        projectName: "Election Season",
        imageIcon: "/election season.png",
        blockchain: "Solana",
        owner: "Ivan Morais",
        ownerProfilePic: "profile.png",
        goal: "4.45 SOL",
        progress: 75,
        attachments: [false, true, true, true, true],
        dateCreated: "20th Dec, 2024"
    },
    {
        id: 2,
        projectName: "Lorr's Ad Issue",
        imageIcon: "/Lorr.png",
        blockchain: "Ethereum",
        owner: "Langke Zambo",
        ownerProfilePic: "profile.png",
        goal: "5.13 ETH",
        progress: 45,
        attachments: [true, false, true, true, false],
        dateCreated: "19th Dec, 2024"
    },
    {
        id: 3,
        projectName: "Venture Capitalist",
        imageIcon: "venture.png",
        blockchain: "Polygon",
        owner: "Cecilia Pozo",
        ownerProfilePic: "profile.png",
        goal: "3.59 POL",
        progress: 35,
        attachments: [false, true, true, true, false],
        dateCreated: "17th Dec, 2024"
    },
    {
        id: 4,
        projectName: "Tracking on the Go",
        imageIcon: "tracking on the go.png",
        blockchain: "Hedera",
        owner: "Matilda Evans",
        ownerProfilePic: "Matilda Profile.png",
        goal: "1.45 HBAR",
        progress: 60,
        attachments: [false, true, true, true, true],
        dateCreated: "15th Dec, 2024"
    },
    {
        id: 5,
        projectName: "Behind One of...",
        imageIcon: "behind.png",
        blockchain: "Algorand",
        owner: "Maeng Yeo-Jin",
        ownerProfilePic: "profile.png",
        goal: "14.15 ALGO",
        progress: 80,
        attachments: [true, false, false, true, false],
        dateCreated: "13th Dec, 2024"
    }
    ];

    const tableElements = tableList.map((item) => (
        <button className="table-rows" key={item.id}>
            <div className="cell"><div className="table-img"><img src={item.imageIcon} alt="" /></div><p>{item.projectName}</p></div>
            <div className="cell"><div className="table-img"><img src={item.blockchain + ".svg"} alt="" /></div><p>{item.blockchain}</p></div>
            <div className="cell"><div className="profile-icon"><img src={item.ownerProfilePic} alt="" /></div><p>{item.owner}</p></div>
            <div className="cell"><p>{item.goal}</p></div>
            <div className="cell"><div className="donor-progress-bar"><div className="donor-progress-made" style={{width: item.progress}}></div></div></div>
            <div className="cell">
                <div className="attachment-row">
                    {<GetAttachmentIcons array={item.attachments} />}
                </div>
            </div>
            <div className="cell"><p>{item.dateCreated}</p></div>
        </button>));
    return (
        <div className="table-body">{tableElements}</div>
    );
}

const ActivityFeed: React.FC<{}> = () => {
    let tableList = [
    {
        id: 1,
        activity: "/money.svg",
        activitytitle: "Donation to 'Building Wells For Life'",
        description: "You donated $50 to 'Building Wells For Life'",
        datetime: "24th December, 2024 | 22:30:45",
        openNewTab: true,
        download: true
    },
    {
        id: 2,
        activity: "/Update Icon.svg",
        activitytitle: "'Building Wells For Life' Update",
        description: "'Building Wells For Life' has reached 90%...",
        datetime: "20th December, 2024 | 17:15:35",
        openNewTab: true,
        download: true
    },
    {
        id: 3,
        activity: "/NFT Icon.svg",
        activitytitle: "NFT from 'Green Energy Homes'",
        description: "You received an exclusive NFT for supporting...",
        datetime: "18th December, 2024 | 23:45:09",
        openNewTab: true,
        download: true
    },
    {
        id: 4,
        activity: "flag.svg",
        activitytitle: "'Save The Forest' milestone",
        description: "'Save The Rainforest' reached its first milestone",
        datetime: "13th December, 2024 | 10:05:59",
        openNewTab: true,
        download: true
    },
    {
        id: 5,
        activity: "/money.svg",
        activitytitle: "Donation to 'Laptop 4 Devs'",
        description: "You donated $20 to 'Laptops 4 Devs'",
        datetime: "10th December, 2024 | 05:58:09",
        openNewTab: true,
        download: true
    }
    ];

    const tableElements = tableList.map((item) => (
        <div className="table-rows" key={item.id}>
            <div className="activity-cell"><p><img src={item.activity} alt="" /></p></div>
            <div className="tall-cell"><p>{item.activitytitle}</p></div>
            <div className="tall-cell"><p>{item.description}</p></div>
            <div className="activity-cell"><p>{item.datetime}</p></div>
            <div className="activity-cell"><div className="download-opentab"><button><img src={item.openNewTab ? "/open_new_tab.svg" : ""} alt="" /></button> <button><img src={item.download ? "/download.svg" : ""} alt="" /></button></div></div>
        </div>));
    return (
        <div className="table-body">{tableElements}</div>
    );
}

const DonorDashboard: React.FC<{}> = () => {
    return (
    <div className="dashboard">
        <section>
            <p>Donor - Home &gt; DASHBOARD</p>
            <h1>Dashboard</h1>
            <p>
                Here, you can see quick stats on your 
                donations, Recommended projects, project 
                updates, NFTs collected, and many more...
            </p>
            <div className="donor-cards">
                <div className="donor-card">
                    <p className="title green-text"><img src="/money.svg" alt="money icon" /> Total Donation Amount</p>
                    <h2 className="green-text">$5,000</h2>
                    <p className="small-card-text">donated so far</p>
                    <a className="green-text" href="/">View Donations Breakdown</a> <span className="green-text">&gt;</span>
                </div>
                <div className="donor-card">
                    <p className="title blue-text"><img src="/Number of Donations Made.svg" alt="number of donations icon" /> Number of Donations</p>
                    <h2 className="blue-text">15</h2>
                    <p className="small-card-text">updated on: 20th Dec, 2024</p>
                    <a className="blue-text" href="/">View Donation History</a> <span className="blue-text">&gt;</span>
                </div>
                <div className="donor-card">
                    <p className="title yellow-text"><img src="/Projects Icon.png" alt="project icon" /> Projects Supported</p>
                    <h2 className="yellow-text">8</h2>
                    <p className="small-card-text">projects supported by you</p>
                    <a className="yellow-text" href="/">View Supported Projects</a> <span className="yellow-text">&gt;</span>
                </div>
                <div className="donor-card">
                    <p className="title purple-text"><img src="/Average Donation Icon.svg" alt="average donation icon" /> Average Donation</p>
                    <h2 className="purple-text">$333</h2>
                    <p className="small-card-text">Per Donation</p>
                </div>
                <div className="donor-card">
                    <p className="title pink-text"><img src="/Largest Donation Icon.svg" alt="largest donation icon" /> Largest Donation</p>
                    <h2 className="pink-text">$1,000</h2>
                    <p className="small-card-text">Keep it up!</p>
                </div>
                <div className="donor-card">
                    <p className="title orange-text"><img src="/flag.svg" alt="flag" /> Impact Assessment</p>
                    <h2 className="orange-text">5</h2>
                    <p className="small-card-text">projects goals you helped accomplish</p>
                    <a className="orange-text" href="/">View Impact Assessment</a> <span className="orange-text">&gt;</span>
                </div>
                <div className="donor-card">
                    <p className="title dark-blue-text"><img src="/NFT Icon.svg" alt="nft icon" /> NFTs Received</p>
                    <h2 className="dark-blue-text">40</h2>
                    <p className="small-card-text">Collectibles: 25 | Utilities: 15</p>
                    <a className="dark-blue-text" href="/">View All Your NFTs</a> <span className="dark-blue-text">&gt;</span>
                </div>
            </div>
        </section>

        <hr />

        <section>
            <h2>Recommended Projects</h2>
            <p>A curated list of projects on your recent preferences and donations history (Updated every 24 hours)</p>
            <div className="tables">
                <div className="table-header">
                    <div className="table-rows">
                        <div className="cell"><p>Project Title</p></div>
                        <div className="cell"><p>Blockchain</p></div>
                        <div className="cell"><p>Project Owner</p></div>
                        <div className="cell"><p>Funding Goal</p></div>
                        <div className="cell"><p>Funding Progress</p></div>
                        <div className="cell"><p>Attachments</p></div>
                        <div className="cell"><p>Date Created</p></div>
                    </div>
                </div>
                <RecommendedProjects />
            </div>
        </section>
        
        <hr />

        <section>
            <h2>Activity Feed</h2>
            <p>Shows a list of recent activities surrounding donations, projects, and NFT receipts</p>
            <div className="activity-table">
                <div className="table-header activity-table-header">
                    <div className="table-rows">
                        <div className="activity-cell"><p>Activity</p></div>
                        <div className="activity-cell"><p>Activity Title</p></div>
                        <div className="activity-cell"><p>Description</p></div>
                        <div className="activity-cell"><p>Date & Time</p></div>
                        <div className="activity-cell"><p>Quick Actions</p></div>
                    </div>
                </div>
                <ActivityFeed />
            </div>
        </section>
    </div>
    );
}

export default Donor00A;