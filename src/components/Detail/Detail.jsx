
import { Link } from "react-router-dom";



const Detail = ({oneClickedData}) => {
    const {id,
        eventName,
        image,
        price,
        shortDescription,
        longDescription,
        date,
        location,
        registrationDeadline,
        eventType,
        capacity,
        agendaLink,
        contactEmail} = oneClickedData
        
        
    
    return (
        <>
        {/* <Toaster 
                position="top-right"
                reverseOrder={false}
                
            /> */}
       <div className="flex lg:flex-row flex-col justify-center gap-10"> 
         {/* left */}
       <div>
       <div>
           <img className="md:w-auto lg:w-[50%] mb-8" src={image} alt="" />
        </div>
        <div className="space-y-5">
            <p className="text-3xl 2xl:text-4xl font-bold">{eventName}</p>
            <p className="text-gray-500 xl:text-lg 2xl:text-xl">{shortDescription}</p>
            <h3 className="text-2xl mt-10 font-bold">All Details</h3>
            <p className="xl:text-lg 2xl:text-xl text-gray-500">{longDescription}</p>
        </div>
       </div>
        {/* right */}
        <div className="relative  drop-shadow-xl shadow-xl flex-1 shadow-black  p-[5%] xl:text-base 2xl:text-xl">
          <p className="font-bold text-2xl p-2">Try Now</p>
          <p className="p-2 2xl:text-3xl  xl:text-2xl font-bold text-gradient">Informations</p>
          <hr className="border border-purple-500 my-3" />
          <p className="p-2 text-gray-500"><span className="font-bold font-xl text-black">Location : </span> {location}</p>
          <p className="p-2 text-gray-500"><span className="font-bold font-xl text-black">Event Type</span> : {eventType}</p>
          <p className="p-2 text-gray-500"><span className="font-bold font-xl text-black">capacity</span> : {capacity}</p>
          <p className="p-2 text-gray-500"><span className="font-bold font-xl text-black">Deadline </span>: {registrationDeadline}</p>
          <p className="p-2 text-gray-500"><span className="font-bold font-xl text-black">Agenda Link</span> : {agendaLink}</p>
          <p className="p-2 text-gray-500"><span className="font-bold font-xl text-black">Contact Email </span>: {contactEmail}</p>
          <p className="p-2 text-gray-500"><span className="font-bold font-xl text-black">Price </span>: {price}</p>
        <Link to={`/booking/${id}`}>
        <button  className="relative  left-0  top-3 text-red flex items-center justify-center mt-5 hover:before:bg-redborder-red-500  w-full py-2 overflow-hidden border  border-purple-500  rounded-md font-semibold  bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full">
        <span className="relative z-10">Book Now</span></button>
        </Link>
        </div>
       </div>
        </>
    );
};

export default Detail;