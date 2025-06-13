import './navStyle.scss'
import { NavLink } from 'react-router'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Navegation() {

  return (
    <>
<nav className="menu">
  <ul>
    <img src='/logo.svg' alt="logo" /> 
    
    <NavLink to="products"><li className="menuList"><a className="menuLink" href="#">shop</a></li></NavLink>
    <NavLink to="about"><li className="menuList"><a className="menuLink" href="#">about us</a></li></NavLink>
    <NavLink to="contact"><li className="menuList"><a className="menuLink" href="#">contact us</a></li></NavLink>
    
    

<p>search bar here</p>
     <NavLink to="profile"> <li className="menuList"><a className="menuLink" href="#"><FaUser /></a></li></NavLink>
     <NavLink to="cart"> <li className="menuList"><a className="menuLink" href="#"><FaShoppingCart /></a></li></NavLink>
   
    
  </ul>
</nav>
    </>
  )
}
