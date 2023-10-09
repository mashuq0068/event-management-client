import { useEffect, useState } from "react";
import Service from "../Service/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Services = () => {
  AOS.init()
  const [services , setServices] = useState([])
  useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data => setServices(data.events))

  },[])
  return (
    <div data-aos-duration="1000" data-aos="fade-up" className="lg:mb-36 mb-12">
    <div className="text-center text-2xl md:text-2xl font-semibold  lg::3xl 2xl:text-4xl mb-8  lg:mb-16">
      <h3>Our Services</h3>
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 px-[7%] gap-7">
      {
        services.map((service ) => <Service key={service.id} service = {service}></Service>)
      }
    </div>
    </div>
  );
};

export default Services;