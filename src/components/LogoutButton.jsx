import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router";
import { GiExitDoor } from "react-icons/gi";

export default function LogoutButton() {

    const { logout, token } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout(); // Call the logout function from AuthContext
        navigate("/"); // Redirect to the login page after logout
    }

    return token ?  (
        <button className="loguot__btn" onClick={handleLogout}><GiExitDoor /></button>
    )   : null
}