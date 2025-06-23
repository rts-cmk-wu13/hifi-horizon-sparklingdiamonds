
import { useLocation } from "react-router"
import { NavLink } from "react-router"

export default function ProfileNav() {

    const location = useLocation()


    return (
        <nav className="profile__nav">
            <ul className="nav__list">
                <li><NavLink
                    to="/profile"
                    end
                    className={({ isActive }) => `profile__nav__btn ${isActive ? "active" : ""}`}>
                    My Profile
                    </NavLink>
                </li>
                <li><NavLink  to="myorders" className="profile__nav__btn ">
                      My Orders
                   </NavLink>
                </li>
            </ul>
        </nav>
    )
}