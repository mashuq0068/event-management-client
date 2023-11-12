import { useEffect, useState } from "react";

import PreviousDeal from "../PreviousDeal/PreviousDeal";


const PreviousDeals = () => {
    const[bookings ,setBookings] = useState([])
   
    
    useEffect(()=>{
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data  => setBookings(data))

    },[])
   
  
    
    return (
        <div className="lg:p-0 p-[5%] mb-36">
            <div className="space-y-7 lg:space-y-16 mt-7 lg:mt-20">
                <h1 className="2xl:text-4xl text-3xl font-bold text-center">Corporate Event Manager</h1>
                <p className="lg:w-[50%] mx-auto text-center 2xl:text-xl text-gray-500">At Corporate Event Manager , we are the experts in crafting extraordinary corporate events that leave a mark. Our creative innovation, impeccable execution, and global reach set us apart. With cutting-edge technology and exceptional value, we ensure your event is a success. Count on us for dedicated support throughout the journey. Join hands with Corporate Event Manager and let us elevate your corporate events to new heights.</p>
            </div>
            <div className="mt-7 lg:mt-16">
                <h3 className="2xl:text-3xl text-2xl font-bold text-center">Previous Deals</h3>
                <p className="text-center text-gradient  font-extrabold">______________________________________________</p>
            {bookings?.length === 0 ? <p className="text-4xl text-center mt-5 lg:mt-16 text-gray-500">You did not any deal with us at past</p>:
            <div>
                <div className=" grid mt-[1%]  py-2 lg:py-4 drop-shadow-xl shadow-lg shadow-purple-300 grid-cols-6 2xl:text-xl font-bold text-gray-700 justify-items-center ">
                  <h3>No</h3>
                  <h3>Event Name</h3>
                  <h3>Event Type</h3>
                  <h3>Booking Date</h3>
                  <h3>Event Date</h3>
                  <h3>Details</h3>
                </div>

              <div>
              {  bookings?.map((previousDeal , i )=> <PreviousDeal i={i} key={previousDeal.id} previousDeal={previousDeal}></PreviousDeal>)}
              </div>

            </div>
                }
            </div>
        </div>
    );
};

export default PreviousDeals;