import { DonorSideBar } from '../components/DonorSideBar';
import { HeaderBar } from '../components/DonorHeader';
import { Footer } from '../components/DonorFooter';
import { setSideNumber } from '../components/DonorSideBar';
import { GetAttachments } from '../components/DonorAttachments';
import './Donor.css';

const Donor01A: React.FC<{}> = () => {
    setSideNumber(1);
    return (
        <div className="donor-00A">
            <HeaderBar />
            <div className="barpage">
                <DonorSideBar />
                <ProjectDashboard />
            </div>
            <Footer />
        </div>
    );
}

const ProjectDashboard: React.FC<{}> = () => {
    return (
    <div className="dashboard">
        <section>
            <p>Donor - Home &gt; PROJECTS DASHBOARD</p>
            <h1>Projects Dashboard</h1>
            <p>
                Here, you can see active projects displayed in a comprehensive list...
            </p>
            <div className="pd-tables">
                <div className="table-header">
                    <div className="table-rows">
                        <div className="cell"><p>Project Title</p></div>
                        <div className="cell"><p>Blockchain</p></div>
                        <div className="cell"><p>Project Owner</p></div>
                        <div className="cell"><p>Funding Goal</p></div>
                        <div className="cell"><p>Funding Progress</p></div>
                        <div className="cell"><p>Attachments</p></div>
                        <div className="cell"><p>Date Created</p></div>
                        <div className="cell"><p>Expiration Date</p></div>
                    </div>
                </div>
                <Projects />
            </div>

            <div className="project-navigation">

            </div>
        </section>
    </div>
    );
}

const Projects: React.FC<{}> = () => {

    let tableList = [
    {
        id: 1,
        projectName: "Election Season",
        imageIcon: "/election season.png",
        blockchain: "Solana",
        owner: "Ivan Morais",
        goal: "4.45 SOL",
        progress: 75,
        attachments: [false, true, true, true, true],
        dateCreated: "20th Dec, 2024",
        expirationDate: "12th Jan, 2025"
    },
    {
        id: 2,
        projectName: "Lorr's Ad Issue",
        imageIcon: "/Lorr.png",
        blockchain: "Ethereum",
        owner: "Langke Zambo",
        goal: "5.13 ETH",
        progress: 45,
        attachments: [true, false, true, true, false],
        dateCreated: "19th Dec, 2024",
        expirationDate: "09th Jan, 2025"
    },
    {
        id: 3,
        projectName: "Venture Capitalist",
        imageIcon: "venture.png",
        blockchain: "Polygon",
        owner: "Cecilia Pozo",
        goal: "3.59 POL",
        progress: 35,
        attachments: [false, true, true, true, false],
        dateCreated: "17th Dec, 2024",
        expirationDate: "07th Jan, 2025"
    },
    {
        id: 4,
        projectName: "Tracking on the Go",
        imageIcon: "tracking on the go.png",
        blockchain: "Hedera",
        owner: "Matilda Evans",
        goal: "1.45 HBAR",
        progress: 60,
        attachments: [false, true, true, true, true],
        dateCreated: "15th Dec, 2024",
        expirationDate: "05th Jan, 2025"
    },
    {
        id: 5,
        projectName: "Behind One of...",
        imageIcon: "behind.png",
        blockchain: "Algorand",
        owner: "Maeng Yeo-Jin",
        goal: "14.15 ALGO",
        progress: 80,
        attachments: [true, false, false, true, false],
        dateCreated: "13th Dec, 2024",
        expirationDate: "03rd Jan, 2025"
    }
    ];

    const tableElements = tableList.map((item) => (
        <div className="table-rows" key={item.id}>
            <div className="cell"><div className="table-img"><img src={item.imageIcon} alt="" /></div><p>{item.projectName}</p></div>
            <div className="cell"><div className="table-img"><img src={item.blockchain + ".svg"} alt="" /></div><p>{item.blockchain}</p></div>
            <div className="cell"><div className="profile-icon"><img src="profile.png" alt="" /></div><p>{item.owner}</p></div>
            <div className="cell"><p>{item.goal}</p></div>
            <div className="cell"><div className="progress-bar"><div className="progress-made" style={{width: item.progress}}></div></div></div>
            <div className="cell">
                <div className="attachment-row">
                    {<GetAttachments array={item.attachments} />}
                </div>
            </div>
            <div className="cell"><p>{item.dateCreated}</p></div>
            <div className="cell"><p>{item.expirationDate}</p></div>
        </div>));
    return (
        <div className="table-body">{tableElements}</div>
    );
}


export default Donor01A;