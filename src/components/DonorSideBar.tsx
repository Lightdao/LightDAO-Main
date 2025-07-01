//NOTE: temporary solution, eventually will use props and useState for this
export let sideNumber: number = 0;

export function setSideNumber(newValue: number) {
    sideNumber = newValue;
}

export const DonorSideBar: React.FC<{}> = () => {
    return (
    <div className="side-bar">
        <hr />
        <p>Home</p>
        <a className={sideNumber === 0 ? "selected" : ""} href="/Donor00A"><div><img src="dashboard.svg" alt="dashboard icon" /></div> Dashboard</a>
        <hr />

        <p>Active Projects</p>
        <a className={sideNumber === 1 ? "selected" : ""} href="/Donor01A"><div><img src="space_dashboard.svg" alt="dashboard icon" /></div>Projects Dashboard</a>
        <hr />

        <p>Donations</p>
        <a className={sideNumber === 2 ? "selected" : ""} href="/Donor00A"><div><img src="schedule.svg" alt="clock icon" /></div>Donations History</a>
        <hr />

        <p>NFT Management</p>
        <a className={sideNumber === 3 ? "selected" : ""} href="/Donor00A"><div><img src="onLight.png" alt="image icon" /></div>NFT Collections</a>
        <hr />

        <p>Donor Engagement Tools</p>
        <a className={sideNumber === 4 ? "selected" : ""} href="/Donor00A"><div><img src="Community Feed Icon.png" alt="speech bubble icon" /></div>Community Feed</a>
        <br />
        <a className={sideNumber === 5 ? "selected" : ""} href="/Donor00A"><div><img src="onLight.svg" alt="speech bubble icon" /></div>Projects Feedback</a>
        <hr />

        <p>Settings & Security</p>
        <a className={sideNumber === 6 ? "selected" : ""} href="/Donor00A"><div><img src="Profile Settings Icon.png" alt="profile settings icon" /></div>Profile Settings</a>
        <br />
        <a className={sideNumber === 7 ? "selected" : ""} href="/Donor00A"><div><img src="settings.svg" alt="settings icon" /></div>Platform Settings</a>
        <hr />
    </div>
    );
}
