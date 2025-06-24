import { NavLink } from "react-router"
import '../../pages/Profile/Profile.scss'

export default function ShippingNav() {

    return (
        <>
         <nav >
                    <ul className="shipping__nav__list">
                        <li><NavLink to='shipping-home' className="shipping__link" >
                                Home delivery
                            </NavLink>
                        </li>
                        <li><NavLink to="click-and-collect" className="shipping__link ">
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