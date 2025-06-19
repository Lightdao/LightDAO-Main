export const HeaderBar: React.FC<{}> = () => {
    let username = "Seraph M.";
    return (
    <>
        <header>
            <h2 className="logo">LIGHTDAO</h2>
            <input className="search-bar" placeholder="Search items, collections, and accounts" />
            <div className="user-stuff">
                <button className="moon"><img src="/dark_mode.svg" alt="moon" /></button>
                <button className="notification"><img src="/notifications.svg" alt="bell" /></button>
                <div className="profile">
                    <div className="profile-picture">
                        <img src="main profile.png" alt="profile picture" />
                    </div>
                    <div>
                        <p className="username">{username}</p>
                    </div>
                    <div className="downarrow"><img src="down arrow.svg" alt="down arrow" /></div>
                </div>
            </div>
        </header>
    </>
    );
}
