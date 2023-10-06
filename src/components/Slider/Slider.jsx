import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

export default function Slider() {
 
  
  return (
   
      <div id="slider-container">
        <AwesomeSlider animation="foldOutAnimation">
        
          
        <div>
        <img src="https://www.daeventz.com/images/Event-management-companies.jpg" />
        </div>
        <div>
       <img src="https://voloevents.com/wp-content/uploads/2016/06/Corporate-Management-and-Production-Lead.jpg" alt="" />
        </div>
        <div>
       <img src="https://www.sublimeeventdesigns.com/wp-content/uploads/2017/08/orlando-Corporate-Event-Management-Company.jpg " alt="" />
        </div>
     
      
        

    
 
</AwesomeSlider>

      </div>
  );
  
}
{/* <img src="https://www.sublimeeventdesigns.com/wp-content/uploads/2017/08/orlando-Corporate-Event-Management-Company.jpg */}