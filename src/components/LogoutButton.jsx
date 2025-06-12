import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router";

export default function LogoutButton() {

    const { logout, token } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout(); // Call the logout function from AuthContext
        navigate("/"); // Redirect to the login page after logout
    }

    return token ?  (
        <button className="btn__logout btn__signin" onClick={handleLogout}>Log out</button>
    )   : null
}