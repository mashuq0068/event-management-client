import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from "moment/moment";
import Swal from 'sweetalert2'


const Booking = () => {
    const params = useParams()
    const {user} = useContext(AuthContext)
    const [event , setEvent] = useState(null)
    const [type , setType] = useState(null)
    const [id , setId] = useState()
    console.log(params.id)
const [services , setServices] = useState([])
  useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data => setServices(data?.events?.filter(onService => parseInt(onService.id) === parseFloat(params.id))))

  },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const eventName = event
    const eventType = type
    const email = form.email.value 
    const location = form.location.value 
    const mobileNumber = form.mobileNumber.value 
    const eventDate = form.eventDate.value
    const bookingDate = moment().format('LL')
    const additionalInformation = form.additionalInformation.value
    const serviceId = id
    const booking = {eventName , eventType , email , location , mobileNumber , additionalInformation , bookingDate , eventDate, serviceId}
    fetch('http://localhost:5000/bookings' , {
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        Swal.fire({
            title: "Congratulations",
            text: `You have booked our service for ${eventDate}`,
            icon: "success"
          });
    })
    
  

  }
    return (
        <div>
            {services?.map (service => 
            
                 
                <div key={service?.id}>
                  <form onClick={()=>{
                    setEvent(service?.eventName)
                    setType(service?.eventType)
                    setId(service?.id)
                  }} onSubmit={handleSubmit} className=" drop-shadow-xl shadow-black shadow-lg rounded-2xl py-[3%] px-[5%] md:w-[80vw] w-[90vw] lg:w-[50vw]  mt-[2%] mx-auto">
                <div className=" grid grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                 <span className="label-text md:text-lg text-gray-900 2xl:text-xl">Your Contact Email</span>
                  </label>
                   <input value={user?.email} type="email" name="email" placeholder="email" className="input  border  border-purple-500   md:text-lg 2xl:text-xl  input-bordered" required />
                  
                  </div>
                 
                  <div className="form-control">
                  <label className="label">
                 <span className="label-text text-gray-900   md:text-lg 2xl:text-xl">Your Location</span>
                  </label>
                   <input type="text" placeholder="Your Location" name="location" className="input md:text-lg 2xl:text-xl border  border-purple-500 input-bordered" required />
                  </div>
                 
                </div>
               <div className="grid grid-cols-2 gap-5">
               <div className="form-control mt-[3%]">
                  <label className="label">
                 <span className="label-text text-gray-900   md:text-lg 2xl:text-xl">Mobile Number</span>
                  </label>
                   <input type="text" placeholder="Mobile Number" name="mobileNumber" className="input md:text-lg 2xl:text-xl border  border-purple-500 input-bordered" required />
                   
                  </div>
               <div className="form-control mt-[3%]">
                  <label className="label">
                 <span className="label-text text-gray-900   md:text-lg 2xl:text-xl">Event Date</span>
                  </label>
                   <input type="date" placeholder="Event Date" name="eventDate" className="input md:text-lg 2xl:text-xl border  border-purple-500 input-bordered" required />
                   
                  </div>
               </div>
                 
                <div className="form-control mt-[3%]">
                  <label className="label">
                 <span className="label-text text-gray-900   md:text-lg 2xl:text-xl">Additional Information (Optional)</span>
                  </label>
                  <textarea placeholder="Additional Information (If you want to give)" className="input border  border-purple-500 md:text-lg 2xl:text-xl input-bordered h-[20vh]" name="" id="additionalInformation" cols="30"  rows="30"></textarea>
                  </div>
                 
                  <button  className="relative  left-0 md:text-lg 2xl:text-xl  top-3 text-red flex items-center justify-center mt-5 hover:before:bg-redborder-red-500  w-full py-2 overflow-hidden border  border-purple-500  rounded-md font-semibold  bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full">
                  <span className="relative z-10">Book Now</span></button>
                
                  </form>
                  </div>
                
            )}
        </div>
        
    );
};

export default Booking;