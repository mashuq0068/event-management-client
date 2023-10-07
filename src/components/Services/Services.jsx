import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
  const [services , setServices] = useState([])
  useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data => setServices(data.events))

  },[])
  return (
    <>
    <div className="text-center text-2xl md:text-2xl font-semibold  lg::3xl 2xl:text-4xl mt-20 mb-6 lg:mt-36 lg:mb-12  ">
      <h3>Our Services</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 px-[7%] gap-7">
      {
        services.map((service ) => <Service key={service.id} service = {service}></Service>)
      }
    </div>
    </>
  );
};

export default Services;