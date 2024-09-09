import video1 from '../../assets/production_id_4916813 (1080p).mp4'
const BannerTop = () => {
    return (
        <div>
        <div className="lg:h-[80vh] relative">
        <div className=" ">
        <video className="" autoPlay loop muted playsInline>
        <source src={video1}  type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       </div>
       <div className="absolute rounded-xl drop-shadow-xl shadow-lg flex justify-center items-center flex-col  shadow-black left-[24%] md:left-[27%] px-12 lg:px-24 py-8 lg:py-24 lg:left-[30%]   md:backdrop-blur-lg top-[20%] 2xl:top-[40%] 2xl:left-[36%]">
             <p className="2xl:text-5xl md:block hidden md:text-3xl lg:text-5xl text-white font-bold "> Choose Your Event </p>
       <a  href="/services" className="bg-gradient-to-r mt-6 w-max mx-auto  md:text-lg  border-none from-[#e944d3]  drop-shadow-xl shadow-xl to-[#25baff]  text-black btn capitalize">
        <span className="relative z-10"> Get Started</span></a>
       </div>
        </div>
        </div>
    );
}

export default BannerTop;