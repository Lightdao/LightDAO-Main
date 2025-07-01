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
                <div className="project-data">
                    <div>
                        <p>
                            By <span className="project-info">{projectData.owner}</span> Creation Date: <span className="project-info">{projectData.dateCreated}</span> Expiration Date: <span className="project-info">{projectData.expirationDate}</span>
                        </p>
                        <div className="project-funding">
                            <p>Funding Goal: $200</p>
                            <div></div>
                            <p>Funding Goal: {projectData.progress}%</p>
                            <div className="progress-bar"><div className="progress-made" style={{width: projectData.progress}}></div></div>
                        </div>
                        <p>Category:</p>
                    </div>
                    <img src={projectData.imageIcon} alt="project image icon" />
                </div>
                <h6>Project Description</h6>
                <div className="project-description">
                    <h5>Overview</h5>
                    <p>
                        "Tracking On The Go" is a cutting-edge mobile application designed to 
                        revolutionize how individuals monitor and manage their health. 
                        In today's fast-paced world, keeping track of calorie intake and 
                        burn rate can be a challenge. This app empowers users to take control 
                        of their fitness journey by providing an intuitive, user-friendly platform 
                        for tracking and analyzing their daily calorie metrics.
                    </p>
                    <h5>Purpose</h5>
                    <p>
                        The primary goal of this proposal is to develop an all-in-one calorie 
                        tracking app that integrates seamlessly into the daily lives of users. 
                        By leveraging modern technology, "Tracking On The Go" will enable users 
                        to make informed decisions about their nutrition and activity levels, leading 
                        to healthier lifestyles and better fitness outcomes.
                    </p>
                </div>
                <h6>Attachments</h6>
                <div className="attachment-names-row">

                </div>
            </section>
            
            <hr />

            <section>
                <div>
                    <button>GO BACK</button>
                    <div>
                        <button>SHARE</button>
                        <button>DONATE</button>
                    </div>
                </div>
            </section>
            
            <hr />

            <section>
                <h6>Project Updates</h6>
                <p>Timely updates and correspondence of the active project by the Project Owner...</p>
                {/* may change this later */}
                <div className="tables">
                    <div className="table-body">
                        <div className="table-rows">
                            <img className="cell" src="" alt="" />
                            <p className="cell">The prototype for the app is complete. Testing should begin next week</p>
                            <p className="cell">08:30:39 | 27th Dec, 2024</p>
                            <div className="cell">
                                <p>15</p>
                                <img src="" alt="" />
                            </div>
                            <img src="" alt="" />
                        </div>
                        <div className="table-rows">
                            <img className="cell" src="" alt="" />
                            <p className="cell">Fundraising has reached 70% of its target goal</p>
                            <p className="cell">22:01:17 | 15th Dec, 2024</p>
                            <div className="cell">
                                <p>5</p>
                                <img src="" alt="" />
                            </div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <a href="">See more updates...</a>
            </section>

            <hr />

            <section>
                <h6>Donation Perks & Benefits</h6>
                <p>Awesome gifts that accompany project donation...</p>
                <div>
                    <div>
                        <div></div>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <img src="" alt="" />
                    <div>
                        <h6>Lion of Judah</h6>
                        <p>Unlock with a donation of $50+</p>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section>
                <h6>Project Owner History</h6>
                <div>
                    <img src="" alt="" />
                    <p>Date Joined: <span>03rd May, 2024</span></p>
                </div>
                <div>
                    
                </div>
            </section>
        </div>
    );
}

export default Donor01A;