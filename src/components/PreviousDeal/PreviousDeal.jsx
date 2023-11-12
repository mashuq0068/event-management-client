import { useState } from "react";
import { Link } from "react-router-dom";



const PreviousDeal = ({previousDeal , i}) => {
    const [count , setCount] = useState(0)
   
    const {eventName , eventType, bookingDate , eventDate, serviceId } = previousDeal
    return (
        
           <li className="flex justify-center py-2 lg:py-3 drop-shadow-xl shadow-xl   lg:grid grid-cols-3 lg:grid-cols-6 justify-items-center items-baseline font-semibold 2xl:text-xl">
           <div className="flex gap-2">
           <p className="rounded-[50%] px-3 py-1 bg-gradient-to-r from-[#e944d3] to-[#25baff]">{i + 1} </p>
            <span className="text-gradient hidden lg:block">____________</span>
           </div>

           
          <p className="text-center  w-max mx-auto">{eventName}</p>
          <p className="text-center hidden lg:block  w-max mx-auto">{eventType}</p>
          
          <p className="text-center hidden lg:block  w-max mx-auto">{bookingDate}</p>
          <p className="text-center hidden lg:block  w-max mx-auto">{eventDate}</p>
          <Link to={`/details/${serviceId}`}  className="text-red flex items-center justify-center mt-5 hover:before:bg-redborder-red-500 text-sm relative lg:h-[50px] lg:w-40 overflow-hidden border  border-purple-500 lg:py-0 py-2  rounded-xl font-semibold lg:text-xl bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full">
        <span className="relative z-10">Show Details</span></Link>
           </li>
       
         
        
           
        
    );
};

export default PreviousDeal;