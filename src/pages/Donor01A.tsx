import { useState } from 'react';
import { DonorSideBar } from '../components/DonorSideBar';
import { HeaderBar } from '../components/DonorHeader';
import { Footer } from '../components/DonorFooter';
import { setSideNumber } from '../components/DonorSideBar';
import { GetAttachments } from '../components/DonorAttachments';
import './Donor.css';

//for now this is global, when backend is implemented it will be removed
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
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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

interface ProjectFunction {
    projectButtonClick: (index: number) => void;
}

const Donor01A: React.FC<{}> = () => {
    const [ProjectSelected, setProjectSelected] = useState(false);
    const [projectIndex, setProjectIndex] = useState(0);
    
    function projectButtonClick(index: number)
    {
        setProjectSelected(true);
        setProjectIndex(index);
    }

    setSideNumber(1);
    return (
        <div className="donor-00A">
            <HeaderBar />
            <div className="barpage">
                <DonorSideBar />
                {ProjectSelected ? <SpecificProject projectData={tableList[projectIndex]}/> : <ProjectDashboard projectButtonClick={projectButtonClick}/>}
            </div>
            <Footer />
        </div>
    );
}

const ProjectDashboard: React.FC<ProjectFunction> = ({projectButtonClick}) => {
    return (
    <div className="project-dashboard">
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
                <Projects projectButtonClick={projectButtonClick}/>
            </div>
            <ProjectNavigation />
        </section>
    </div>
    );
}

const Projects: React.FC<ProjectFunction> = ({projectButtonClick}) => {
    const tableElements = tableList.map((item, index) => (
        <button onClick={() => projectButtonClick(index)} className="table-rows" key={item.id}>
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
        </button>));
    return (
        <div className="table-body">{tableElements}</div>
    );
}

const ProjectNavigation: React.FC<{}> = () => {
    const [current, setCurrent] = useState(1);
    const [amountShown, setAmountShown] = useState(10);
    const [begin, setBegin] = useState(1);

    return (
        <div className="project-navigation">
            <div className="quick-selection">
                <button className="project-left">
                    <div className="left-horizontal-arrow">
                        <img src="/right-arrow.svg" alt="arrow" />
                        <img src="/right-arrow.svg" alt="arrow" />
                    </div>
                </button>
                <button className="project-left small-button">
                    <div className="left-horizontal-arrow">
                        <img src="/right-arrow.svg" alt="arrow" />
                    </div>
                </button>
                <div className="central-buttons">
                    <button onClick={() => setCurrent(1)} className={current === 1 ? "selected" : "unselected"}>1</button>
                    <button onClick={() => setCurrent(2)} className={current === 2 ? "selected" : "unselected"}>2</button>
                    <button onClick={() => setCurrent(3)} className={current === 3 ? "selected" : "unselected"}>3</button>
                    <button onClick={() => setCurrent(4)} className={current === 4 ? "selected" : "unselected"}>4</button>
                    <button onClick={() => setCurrent(5)} className={current === 5 ? "selected" : "unselected"}>5</button>
                </div>
                <button className="project-right small-button">
                    <img src="/right-arrow.svg" alt="arrow" />
                </button>
                <button className="project-right">
                    <img src="/right-arrow.svg" alt="arrow" />
                    <img src="/right-arrow.svg" alt="arrow" />
                </button>
            </div>
            <div className="amount-selection">
                <p>Showing {begin} to {begin + amountShown - 1} of {tableList.length} | Item Per Page: </p>
                <button className="num-items-to-show">
                    {amountShown}
                    <div className="downarrow"><img src="down arrow.svg" alt="down arrow" /></div>
                </button>
            </div>
        </div>
    );
}

interface ProjectJsonLayout {
    id: number,
    projectName: string,
    imageIcon: string,
    blockchain: string,
    owner: string,
    goal: string,
    progress: number,
    attachments: boolean[],
    dateCreated: string,
    expirationDate: string
}

interface ProjectDetails {
    projectData: ProjectJsonLayout;
}

const SpecificProject: React.FC<ProjectDetails> = ({projectData}) => {
    return (
        <div className="project-dashboard">
            <section>
                <p>Donor - Home &gt; PROJECTS DASHBOARD &gt; {projectData.projectName.toUpperCase()} DETAILS</p>
                <h1>{projectData.projectName}</h1>
                <p>
                    By <span>{projectData.owner}</span> Creation Date: <span>{projectData.dateCreated}</span> Expiration Date: <span>{projectData.expirationDate}</span>
                </p>
                <div>
                    <p>Funding Goal: $200</p>
                    <div></div>
                    <p>Funding Goal: {projectData.progress}%</p>
                    <div className="cell"><div className="progress-bar"><div className="progress-made" style={{width: projectData.progress}}></div></div></div>
                </div>
            </section>
        </div>
    );
}

export default Donor01A;