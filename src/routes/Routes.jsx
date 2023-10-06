import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
       path:'/',
       element:<Root></Root>,
       errorElement:<ErrorPage></ErrorPage>,
       children :[
        {
            path:'/',
            element:<HomePage></HomePage>
        }
       ]
    }
])
export default router