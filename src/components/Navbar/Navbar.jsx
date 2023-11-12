import { Link, NavLink } from "react-router-dom";
import {IoLogoTableau} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import "../../index.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";




const Navbar = () => {
  const {user , logOutUser} = useContext(AuthContext)
  const [display , setDisplay] = useState("hidden")
  const handleSignOut = () => {
    logOutUser()
  }
  console.log(user)
    const allLink = 
    <>
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center justify-center lg:text-base xl:text-base 2xl:text-xl ">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/previousDeals'>Previous Deals</NavLink>
    <NavLink to='/faq'>Faq</NavLink>
    </div>
    </>
    return (
        <div className="navbar bg-base-100 2xl:text-xl px-[3%] drop-shadow-xl sticky top-0 shadow-xl mt-5 z-40">
  <div className="navbar-start 2xl:text-xl">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {allLink}
      </ul>
    </div>
   
<div className="w-[40%]">
<a  href="https://imgbb.com/"><img src="https://i.ibb.co/BntqKF1/Screenshot-2023-11-12-120741.png" alt="Screenshot-2023-11-12-120741" border="0"/></a>
</div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {allLink}
    </ul>
  </div>
  
  <div className="navbar-end space-x-5 flex   items-center">
  <div className="flex flex-row md:static relative bottom-2  lg:gap-0  lg:flex-col justify-center items-center lg:p-0">
    <div onMouseLeave={()=>{setDisplay("hidden")}} onMouseOver={()=>{setDisplay("block")}} className={`relative ${user ? "block" : "hidden"} md:static profile-picture md:rounded-none top-1  right-0`}>
      <img className="rounded-[50%] cursor-pointer rounded-profile " src={user?.photoURL} alt="" />
    </div>
   
  
    
    
  </div>
   {!user?.displayName ? <Link to='/login' className=" px-6  py-2 text-base rounded-lg cursor-pointer   lg:text-base xl:text-xl bg-gradient-to-r from-[#e944d3] to-[#25baff] drop-shadow-xl shadow-xl  text-black font-semibold">Login</Link> : <button onClick={handleSignOut} className="px-4 md:px-6 md:static relative py-1 md:py-3 rounded-lg cursor-pointer  lg:text-base xl:text-xl bg-gradient-to-r from-[#e944d3] to-[#25baff] drop-shadow-xl shadow-xl   text-black font-semibold"><span className="hidden md:block">Log Out</span ><span className="block md:hidden">Logout</span></button>}
  </div>
  <div id="user-info" className={`absolute profile-info ${display} bg-white p-[2%] rounded-lg  flex  flex-col lg:text-lg text-base 2xl:text-xl space-y-3 w-[70vw] md:w-max left-[28vw] md:left-[45vw] lg:left-[70vw] lg:w-[25vw] drop-shadow-xl shadow-xl lg:pl-[2%] pl-[5%]  top-[13vh]   duration-300 items-start text-gray-600 font-semibold `}>
  
      <p className=" text-left"><span className="text-gradient font-bold">User Name </span> :  {user?.displayName}</p>
      <p><span className="text-gradient font-bold">Email </span>: {user?.email}</p>
      <p><span className="text-gradient font-bold">Last SignIn Time </span>: {user?.metadata?.lastSignInTime}</p>
      <p> <span className="text-gradient font-bold">Creation Time </span>: {user?.metadata?.creationTime}</p>
     
</div> 
</div>
    );
};

export default Navbar;