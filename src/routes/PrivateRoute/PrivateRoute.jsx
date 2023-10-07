import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(user){
      return children
    }
    else if (loading){
return <span className="loading loading-spinner text-secondary absolute top-[40%] left-[50%]"></span>
    }
   return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;