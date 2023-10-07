import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="">
           


    <div className="h-screen lg:flex  ">
      <div className="lg:flex w-full lg:p-0 p-[10%] lg:w-1/2 hidden bg-gradient-to-r from-[#e944d3] to-[#25baff] justify-around items-center">
        <div>
          <h1 className="text-black font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-black  text-xl mt-5 mb-5">The most popular peer-to-peer lending at SEA</p>
          <button className="text-red shadow-black hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border  border-purple-500  rounded-xl font-semibold text-xl bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full"><span className="relative z-10  ">Read More</span></button>
        </div>
      </div>
      <div className="lg:flex w-full lg:p-0 p-[10%] lg:w-1/2 justify-center items-center drop-shadow-xl shadow-xl bg-white">
        <form className="bg-white drop-shadow-xl shadow-xl p-14 shadow-black w-[60%] ">
          <h1 className="text-gray-800 text-2xl font-bold 2xl:text-4xl mb-1">Login!</h1>
          <p className="text-sm  2xl:text-xl font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input className="px-6 py-3 focus:outline-purple-500 text-sm  2xl:text-xl outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <input className="px-6 py-3 text-sm focus:outline-purple-500  2xl:text-xl outline-none border-none" type="text" name="" id="" placeholder="Password" />
          </div>
         
         <div className="text-red text-center mt-3 cursor-pointer hover:before:bg-redborder-red-500 relative w-full py-3 overflow-hidden border  border-purple-500  rounded-xl font-semibold text-xl bg-white  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full ">
         <input type="submit" className="relative z-10" value="Login" />
         </div>
         <div className="mt-5">
            <p className="xl:text-base 2xl:text-xl">New here ? go for <Link to="/registration" className="text-gradient font-bold ml-2">registration</Link></p>
         </div>
        </form>
      </div>
    </div>
    </div>
 



       
    );
};

export default Login;