import { Link, NavLink } from "react-router-dom";
import {IoLogoTableau} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import "../../index.css"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";




const Navbar = () => {
  const {user , logOutUser} = useContext(AuthContext)
  const handleSignOut = () => {
    logOutUser()
  }
  console.log(user)
    const allLink = 
    <>
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center justify-center lg:text-base xl:text-base 2xl:text-xl ">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/another'>Home</NavLink>
    <NavLink to='/anoteh'>Home</NavLink>
    </div>
    </>
    return (
        <div className="navbar bg-base-100 2xl:text-xl px-[3%] drop-shadow-xl sticky top-0 shadow-xl mt-5 z-40">
  <div className="navbar-start 2xl:text-xl">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        
        {allLink}
      </ul>
    </div>
    <div className="text-gradient text-[#e944d3] text-4xl flex justify-center items-center gap-5">
  <IoLogoTableau className="text-5xl lg:block hidden"></IoLogoTableau>
  <p className=" font-sans xl:text-xl  2xl:text-3xl font-bold hidden lg:block">Corporate Event Manager</p>
  <p className="text-gradient lg:hidden block font-bold -mt-2">CEM</p>
</div>

    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {allLink}
    </ul>
  </div>
  
  <div className="navbar-end space-x-5 flex  items-center">
  <div className="flex flex-row lg:gap-0 gap-2 md:flex-col justify-center items-center lg:p-5">
    <div>
      <img className="w-[50px] rounded-[50%]" src={user?.photoURL} alt="" />
    </div>
    <div >
    <CgProfile className={`${user ? "hidden" : "block text-3xl"}`}></CgProfile>
    </div>
    <p className="mt-3">{user?.displayName}</p>
    
    
  </div>
   {!user?.displayName ? <Link to='/login' className=" px-6 py-3 rounded-lg cursor-pointer  lg:text-base xl:text-xl bg-gradient-to-r from-[#e944d3] to-[#25baff] drop-shadow-xl shadow-xl  text-black font-semibold">Login</Link> : <button onClick={handleSignOut} className="px-6  py-3 rounded-lg cursor-pointer  lg:text-base xl:text-xl bg-gradient-to-r from-[#e944d3] to-[#25baff] drop-shadow-xl shadow-xl   text-black font-semibold">Sign Out</button>}
  </div>
</div>
    );
};

export default Navbar;