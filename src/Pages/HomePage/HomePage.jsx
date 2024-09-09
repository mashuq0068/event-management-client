import { useContext, useRef } from "react";
import Banner from "../../components/Banner/Banner";
import BannerTop from "../../components/BannerTop/BannnerTop";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Trusted from "../../components/Trusted/Trusted";
import VirtualExperience from "../../components/VirtualExperience/VirtualExperience";
import { AuthContext } from "../../Providers/AuthProvider";



const HomePage = () => {
  const {bannerRef} = useContext(AuthContext)
  
 
    return (
    <div className="">
        
      <section className=" lg:block hidden">
      <BannerTop></BannerTop>
      </section>
       
        <section ref={bannerRef}>
        
        <Banner></Banner>
        
        </section>
        <VirtualExperience></VirtualExperience>
        <Services ></Services>
        <Trusted></Trusted>
        <Footer></Footer>
    </div>
    );
};

export default HomePage;