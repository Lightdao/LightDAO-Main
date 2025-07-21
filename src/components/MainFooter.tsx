import "./MainFooter.css";

const MainFooter: React.FC<{}> = () => {
    return (
        <footer className="main-footer">
            <div className="copyright">
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                <a href="/">API</a>
                <p>@ 2024 LightDao All rights reserved</p>
            </div>
            <div className="economic-info">
                <h6>Currency - USD</h6>
                <h6>English</h6>
            </div>
        </footer>
    );
}

export default MainFooter;