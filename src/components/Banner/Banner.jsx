
import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';




const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <>
         
         
        
        <div className="flex flex-col  lg:text-left text-center  lg:flex-row gap-20 mt-20 items-center px-[2%]">
        <AutoplaySlider
        animation="foldOutAnimation"
    play={true}
    cancelOnInteraction={false} 
    interval={3000}
  >
        
       
    
          
       
       <div>
        <img src="https://www.daeventz.com/images/Event-management-companies.jpg" />
        </div>
        <div>
       <img src="https://voloevents.com/wp-content/uploads/2016/06/Corporate-Management-and-Production-Lead.jpg" alt="" />
        </div>
        <div>
       <img src="https://www.sublimeeventdesigns.com/wp-content/uploads/2017/08/orlando-Corporate-Event-Management-Company.jpg " alt="" />
        </div>
      
        
        </AutoplaySlider>

      {/* </div> */}
        {/* div */}
        <div className="space-y-7 ">
            <div className=" font-bold text-5xl   ">
            Best Event Management Company
            </div>
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border  border-purple-500  rounded-xl font-semibold text-xl bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full"><span className="relative z-10  ">Get-started</span></button>
        </div>
        </div>
        
        </>
    );
};

export default Banner;