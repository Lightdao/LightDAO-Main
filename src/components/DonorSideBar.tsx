export enum PageToLoad {
  Dashboard,
  ProjectDashboard,
  DonationHistory,
  NFTCollections,
  CommunityFeedback,
  ProjectFeedback,
  ProfileSettings,
  PlatformSettings,
}

interface DonorsidebarNumber {
  sidebarNumber: number;
}

const DonorSideBar: React.FC<DonorsidebarNumber> = ({ sidebarNumber }) => {
  return (
    <div className="side-bar">
      <p>Home</p>
      <a
        className={sidebarNumber === PageToLoad.Dashboard ? "selected" : ""}
        href="/Donor00A"
      >
        <div>
          <img src="dashboard.svg" alt="dashboard icon" />
        </div>{" "}
        Dashboard
      </a>
      <hr />

      <p>Active Projects</p>
      <a
        className={
          sidebarNumber === PageToLoad.ProjectDashboard ? "selected" : ""
        }
        href="/Donor01A"
      >
        <div>
          <img src="space_dashboard.svg" alt="dashboard icon" />
        </div>
        Projects Dashboard
      </a>
      <hr />

      <p>Donations</p>
      <a
        className={
          sidebarNumber === PageToLoad.DonationHistory ? "selected" : ""
        }
        href="/Donor00A"
      >
        <div>
          <img src="schedule.svg" alt="clock icon" />
        </div>
        Donations History
      </a>
      <hr />

      <p>NFT Management</p>
      <a
        className={
          sidebarNumber === PageToLoad.NFTCollections ? "selected" : ""
        }
        href="/Donor00A"
      >
        <div>
          <img src="onLight.png" alt="image icon" />
        </div>
        NFT Collections
      </a>
      <hr />

      <p>Donor Engagement Tools</p>
      <a
        className={
          sidebarNumber === PageToLoad.CommunityFeedback ? "selected" : ""
        }
        href="/Donor00A"
      >
        <div>
          <img src="Community Feed Icon.png" alt="speech bubble icon" />
        </div>
        Community Feed
      </a>
      <br />
      <a
        className={
          sidebarNumber === PageToLoad.ProjectFeedback ? "selected" : ""
        }
        href="/Donor00A"
      >
        <div>
          <img src="onLight.svg" alt="speech bubble icon" />
        </div>
        Projects Feedback
      </a>
      <hr />

      <p>Settings & Security</p>
      <a
        className={
          sidebarNumber === PageToLoad.ProfileSettings ? "selected" : ""
        }
        href="/Donor00A"
      >
        <div>
          <img src="Profile Settings Icon.png" alt="profile settings icon" />
        </div>
        Profile Settings
      </a>
      <br />
      <a
        className={
          sidebarNumber === PageToLoad.PlatformSettings ? "selected" : ""
        }
        href="/Donor00A"
      >
        <div>
          <img src="settings.svg" alt="settings icon" />
        </div>
        Platform Settings
      </a>
      <hr />
    </div>
  );
};

export default DonorSideBar;
