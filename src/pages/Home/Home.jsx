import Header from "../../components/Header/Header";
import FirmDesc from "../../components/FirmDesc/FirmDesc"
import OurFirm from "../../components/OurFirm/OurFirm";
import ReedingHouse from "../../components/ReedingHouse/ReedingHouse";
import OurProcess from "../../components/OurProcess/OurProcess"

function Home() {
    return (
        <>
            <Header />
            <FirmDesc />
            <OurFirm />
            <ReedingHouse />
            <OurProcess />
        </>
    );
}

export default Home;