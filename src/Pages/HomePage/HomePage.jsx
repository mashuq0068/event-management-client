import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Trusted from "../../components/Trusted/Trusted";
import VirtualExperience from "../../components/VirtualExperience/VirtualExperience";


const HomePage = () => {
    return (
    <div className="">
        <Banner></Banner>
        <Services></Services>
        <VirtualExperience></VirtualExperience>
        <Trusted></Trusted>
        <Footer></Footer>
    </div>
    );
};

export default HomePage;