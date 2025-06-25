import './navStyle.scss'

import '../SearchBar/SearchBar.scss'
import Drop from './dropdown.jsx'


import { NavLink } from 'react-router'
import { FaUser,  FaShoppingCart  } from "react-icons/fa";

import LogoutButton from '../LogoutButton'
import SearchBar from '../SearchBar/SearchBar'




export default function Navegation() {

  return (
    <>

      <nav className="menu">
        <ul>
          <NavLink to="/"><img src='/logo.svg' alt="logo" /></NavLink>

          <Drop />
          <li className="menuList"><NavLink className="menuLink" to="about">ABOUT US</NavLink></li>
          <li className="menuList"><NavLink className="menuLink" to="contact">CONTACT US</NavLink></li>
          <li className="menuList search-bar"><SearchBar /></li>
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

/* import './navStyle.scss';
import '../SearchBar/SearchBar.scss';
import Drop from './dropdown.jsx';

import { NavLink, useLocation } from 'react-router-dom'; // FIXED: react-router → react-router-dom
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import LogoutButton from '../LogoutButton';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

export default function Navegation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // FIXED: Needed for pathname

  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="nav-header">

      
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
      </div>

      <ul className="menu-links">

        <NavLink to="/"><img src="/logo.svg" alt="logo" /></NavLink>
        <Drop />
        <li className="menuList"><NavLink className="menuLink" to="about">ABOUT US</NavLink></li>
        <li className="menuList"><NavLink className="menuLink" to="contact">CONTACT US</NavLink></li>
        <li className="menuList search-bar"><SearchBar /></li>
        <li className="menuList"><NavLink className="menuLink" to="profile"><FaUser /></NavLink></li>
        <li className="menuList"><NavLink className="menuLink" to="cart"><FaShoppingCart /></NavLink></li>
        {location.pathname !== '/login' && <LogoutButton />}
      </ul>
    </nav>
  );
}
 */