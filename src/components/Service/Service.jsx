import { Link } from "react-router-dom";



const Service = ({service}) => {
    console.log(service)
    const{eventName , image , price ,shortDescription , id} = service
    return (
        <div>
            <div className=" drop-shadow-xl hover:shadow-black shadow-xl">
  <figure className="lg:px-10">
    <div >
    <img  src={image} alt="Shoes" className="rounded-xl h-auto md:h-auto lg:h-[274px] w-[100%]" />
    </div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold text-2xl">{eventName}</h2>
    <p className="text-gray-500 mt-3">{shortDescription}</p>
    <p className="text-gray-500 text-gradient font-bold text-xl">{price}</p>
    <div className="card-actions">
      <Link to={`/details/${id}`}  className="text-red flex items-center justify-center mt-5 hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border  border-purple-500  rounded-xl font-semibold text-xl bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full">
        <span className="relative z-10">Show Details</span></Link>
    </div>
  </div>
</div>
        </div>
    );
};


export default Service;