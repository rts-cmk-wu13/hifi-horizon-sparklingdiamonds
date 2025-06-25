import { NavLink } from "react-router"
import { useLocation } from "react-router"
import '../../pages/Profile/Profile.scss'

export default function ShippingNav() {

    return (
        <>
         <nav >
                    <ul className="shipping__nav__list">
                        <li>
                             <NavLink
                             to="/payment"
                             end
                             className={({ isActive }) =>
                            `shipping__link ${isActive ? "active" : ""}`}>
                             Home delivery
                            </NavLink>
                        </li>
                        <li><NavLink to="click-collect" className="shipping__link ">
                               Click-and-collect
                            </NavLink>
                        </li>
                        <li><NavLink to="post-office" className="shipping__link">
                             Postoffice
                            </NavLink>
                        </li>
                    </ul>
                </nav>

        </>
    )
}