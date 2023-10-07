import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";


const router = createBrowserRouter([
    {
       path:'/',
       element:<Root></Root>,
       errorElement:<ErrorPage></ErrorPage>,
       children :[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        },
        {
            path:'/registration',
            element:<RegistrationPage></RegistrationPage>
        }
       ]
    }
])
export default router