import { DonorSideBar } from './DonorSideBar';
import { HeaderBar } from './DonorHeader';
import { Footer } from './DonorFooter';
import { setSideNumber } from './DonorSideBar';
import './Donor00A.css';

const Donor01A: React.FC<{}> = () => {
    setSideNumber(1);
    return (
        <div className="donor-00A">
            <HeaderBar />
            <div className="barpage">
                <DonorSideBar />
            </div>
            <Footer />
        </div>
    );
}

export default Donor01A;