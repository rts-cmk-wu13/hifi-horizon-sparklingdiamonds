import './navStyle.scss'

import '../SearchBar/SearchBar.scss'
import Drop from './dropdown.jsx'

import { NavLink } from 'react-router'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import LogoutButton from '../LogoutButton'
import SearchBar from '../SearchBar/SearchBar'




export default function Navegation() {

  return (
    <>

      <nav className="menu">
        <ul>
          <NavLink to="/"><img src='/logo.svg' alt="logo" /></NavLink>
{/* put drop down here */}

<Drop />

      
          
    <li className="menuList"><NavLink className="menuLink" to="about">ABOUT US</NavLink></li>
    <li className="menuList"><NavLink className="menuLink" to="contact">CONTACT US</NavLink></li>
    <li className="menuList search-bar"><SearchBar/></li>
    <li className="menuList"><NavLink className="menuLink" to="profile"><FaUser /></NavLink></li>
    <li className="menuList"> <NavLink className="menuLink" to="cart"><FaShoppingCart /></NavLink></li>

          {location.pathname !== '/login' && (
            <>
              <LogoutButton />
            </>
          )}


        </ul>
      </nav>
    </>
  )
}
