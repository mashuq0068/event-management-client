import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PreviousDealsPage from "../Pages/PreviousDealsPage/PreviousDealsPage";
import FaqPage from "../Pages/FaqPage/FaqPage";
import BookingPage from "../Pages/BookingPage/BookingPage";


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
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
            loader: ({params}) => fetch(`/services.json/${params.id}`)

        },
        {
            path:'/previousDeals',
            element:<PrivateRoute><PreviousDealsPage></PreviousDealsPage></PrivateRoute>
        },
        {
            path:'/faq',
            element:<PrivateRoute><FaqPage></FaqPage></PrivateRoute>
        },
        {
            path:'/booking/:id',
            element:<PrivateRoute><BookingPage></BookingPage></PrivateRoute>
        }
       ]
    }
])
export default router