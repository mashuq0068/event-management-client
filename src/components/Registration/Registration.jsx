import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa'
import { MdMonochromePhotos } from 'react-icons/md'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Registration = () => {
    const navigate = useNavigate()
    const {
        createUser,
        userWithGoogle,
         } = useContext(AuthContext)
        const [name, setName] = useState(null)
        const [photoUrl, setPhotoUrl] = useState(null)

   
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        if(password.length < 6) {
            return toast.error( " password should be more than 6 characters")
             
           }
           else if(/^[^A-Z]*$/.test(password)){
            return   toast.error("Password must be have at least one capital letter")
              
           }
           else if(/^[^!@#$%^&*()_+{}\[\]:;<>,.?~\\-]*$/.test(password)){
            return   toast.error("Special character must be included in password")
              
           }
        
        
       createUser(email, password)
       
        
            .then(data => {
                console.log(data)
                if(password.length < 6) {
                   return toast.error( " password should be more than 6 characters")
                    
                  }
                  else if(/^[^A-Z]*$/.test(password)){
                   return   toast.error("Password must be have at least one capital letter")
                     
                  }
                  else if(/^[^!@#$%^&*()_+{}\[\]:;<>,.?~\\-]*$/.test(password)){
                   return   toast.error("Special character must be included in password")
                     
                  }

                  updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => {
                        console.log("profile updated")
                    })
                    .catch(errorData => {
                       
                          
                       
                        console.error(errorData.code)
                    })
                 

                
              
                
                    
                 navigate('/login') 
                   
            })
            .catch(error => {
              
               if(error.code === "auth/email-already-in-use"){
                toast.error(error.code)
                return;
               }
               
                console.error(error.code)
            })
            

        
    }
    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)

    }
    const handlePhoto = (e) => {
        console.log(e.target.value)
        setPhotoUrl(e.target.value)
    }
    const handleGoogle = () => {
        userWithGoogle()
            .then(data => {
                console.log(data)
                navigate('/')
            })
            .catch(error => {
                toast.error(error.code)
                console.error(error.code)
            })
    }
   
    return (
        <div className="">

            <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                
            />
            </div>

            <div className="h-screen lg:flex  ">
                <div className="lg:flex w-full lg:p-0 p-[10%] lg:w-1/2 hidden bg-gradient-to-r from-[#e944d3] to-[#25baff] justify-around items-center">
                    <div>
                        <h1 className="text-black font-bold text-4xl font-sans">GoEvent</h1>
                        <p className="text-black  text-xl mt-5 mb-5">The most popular peer-to-peer lending at SEA</p>
                        <button className="text-red shadow-black hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border  border-purple-500  rounded-xl font-semibold text-xl bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full"><span className="relative z-10  ">Read More</span></button>
                    </div>
                </div>
                <div className="lg:flex flex-col w-full lg:p-0 p-[10%] lg:w-1/2 justify-center items-center drop-shadow-xl shadow-xl bg-white">
                    <form onSubmit={handleSubmit} className="bg-white drop-shadow-xl shadow-xl p-14 hover:shadow-black lg:w-[60%] ">
                        <h1 className="text-gray-800 text-2xl font-bold 2xl:text-4xl mb-1">Registration!</h1>
                        <p className="text-sm  2xl:text-xl font-normal text-gray-600 mb-7">Welcome Back</p>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <div className="text-2xl">
                                <FaUserEdit></FaUserEdit>
                            </div>
                            <input onChange={handleName} className="px-6 py-3 focus:outline-purple-500 text-sm  2xl:text-xl outline-none border-none" type="text" name="name" id="" required placeholder="Your Name" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <div className="text-2xl">
                                <MdMonochromePhotos></MdMonochromePhotos>
                            </div>
                            <input onChange={handlePhoto} className="px-6 py-3 focus:outline-purple-500 text-sm  2xl:text-xl outline-none border-none" type="text" name="photoUrl" id="" placeholder="Profile Photo URL" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="px-6 py-3 focus:outline-purple-500 text-sm  2xl:text-xl outline-none border-none" type="text" required name="email" id="" placeholder="Email Address" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <input className="px-6 py-3 text-sm focus:outline-purple-500  2xl:text-xl outline-none border-none" type="password" required name="password" id="" placeholder="Password" />
                        </div>

                        <button className="text-red text-center mt-3 cursor-pointer hover:before:bg-redborder-red-500 relative w-full py-3 overflow-hidden border  border-purple-500  rounded-xl font-semibold text-xl bg-white  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[#e944d3] to-[#25baff]  before:transition-all before:duration-100 hover:text-black hover:border-none hover:before:left-0 hover:shadow-purple-500 hover:before:w-full ">
                            <input type="submit" className="relative z-10" value="Registration" />
                        </button>
                        <div className="mt-5">
                            <p className="xl:text-base 2xl:text-xl">Already Registered ? go for<Link to="/login" className="text-gradient font-bold ml-2">Login</Link></p>
                        </div>

                        {/* social login */}

                    </form >
                    <div className="mt-10 space-y-5 text-center">
                        <button onClick={handleGoogle} className="text-red xl:text-base 2xl:text-xl  text-center hover:before:bg-red rounded-xl font-semibold  relative py-3 w-full overflow-hidden border border-blue-500 bg-white px-3 md:px-16 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-200 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10 gap-2 w-max mx-auto flex items-center"><span className='text-xl'><AiOutlineGoogle></AiOutlineGoogle></span>Continue with Goggle</span></button>



                        
                    </div>

                </div>
            </div>
        </div>





    );
};

export default Registration;