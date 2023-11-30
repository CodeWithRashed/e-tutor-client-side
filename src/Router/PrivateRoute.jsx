import PropTypes from 'prop-types';
import { useContext } from "react"
import { GlobalDataContext } from "../ContextApi/DataContext";
import { Navigate, useLocation } from "react-router-dom"
import LoadingScreen from '../Components/Shared/LoadingScreen';


const PrivateRoute = ({children}) => {
 const {activeUser, loading} = useContext(GlobalDataContext)
 const location = useLocation()

 
if(loading){
   return <div  className="animate-spin" > <LoadingScreen></LoadingScreen> </div>
}

 if(activeUser){
    return children
 }
    return <Navigate state={location.pathname}  to="/login"></Navigate>
 

 
}

PrivateRoute.propTypes = {
   children: PropTypes.node,
}

export default PrivateRoute
