
import { useEffect } from "react";
import Aos from "aos";






const Banner = () => {
    
    
    useEffect(()=>{
        Aos.init()
    },[])
    
    return (
        <div className="lg:mt-[50vh]">
         
         
        
        <div data-aos-duration="1000" data-aos="fade-up"  className="flex flex-col  lg:text-left text-center  lg:flex-row gap-20 mt-20 items-center px-[2%] lg:px-[5%]">
        
        
       
    
          
       
       <div>
        <img src="https://www.daeventz.com/images/Event-management-companies.jpg" />
        </div>
        
      
        
      

      {/* </div> */}
        {/* div */}
        <div className="w-[90%] mx-auto lg:w-[50%]">
            <h1 className=" 2xl:text-3xl text-2xl  font-bold text-center mb-5">Our Mission</h1>
            <p className="text-gray-600  font-thin 2xl:text-lg">At CEM, we specialize in crafting exceptional corporate events that leave a lasting impression. Our mission is to seamlessly blend creativity and precision, ensuring each gathering exceeds expectations. Join us in transforming ordinary moments into extraordinary experiences. Whether it is a conference, team-building retreat, or product launch, we are dedicated to crafting moments that leave a lasting impression, fostering collaboration, and inspiring success. Join us in transforming ordinary events into extraordinary memories that resonate long after the last guest has departed</p>
        </div>
        </div>
       
        
        </div>
    );
};

export default Banner;