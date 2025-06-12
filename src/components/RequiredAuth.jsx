import { Navigate, useLocation } from "react-router"
import { useAuth } from "../context/AuthContext.jsx";

export default function RequiredAuth({children}) {

    const { token } = useAuth();
    const location = useLocation(); // Get the current location to redirect after login

    console.log(location);
    

    if (!token) {
        // If there is no token, redirect to the login page
        return <Navigate to="/login" state={{from : location}}/>
    }

    return children
         
    
}