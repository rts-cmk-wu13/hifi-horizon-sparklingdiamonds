/* important imports */
import { NavLink } from 'react-router';
import './footerStyle.scss'



/* socials icons */
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

/* phone icon */
import { FaPhoneAlt } from "react-icons/fa";

/* credit card icons */
import { FaCcVisa } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

export default function Footer() {

    return (
        <>
            <div className='gridBox'>

                <div className='footerMenu'>
                    <p><NavLink to="/">Home</NavLink></p>
                    <p><NavLink to="products">Shop</NavLink></p>
                    <p><NavLink to="about">About Us</NavLink></p>
                </div>


                <div className='policyBox'>
                    <p>Returns & Refunds</p>
                    <p>Delivery</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className='contactBox'>
                    <p>Contact</p>
                    <span className='contactBold'>
                        <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                        <p><FaPhoneAlt />0131 556 7901</p>
                        <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                        <p><FaPhoneAlt />01324 629 011</p>
                    </span>
                    <div className='socialsLinks'>
                        <p><NavLink to=""><FaFacebookSquare /></NavLink></p>
                        <p><NavLink to=""><FaTwitterSquare /></NavLink></p>
                        <p><NavLink to=""><FaInstagramSquare /></NavLink></p>
                        <p><NavLink to=""><FaSquareYoutube /></NavLink></p>
                    </div>
                </div>

            </div> {/* end of grid box */}
<div className='footerBottom'>

            <div className='creditBox'>
                <p><FaCcStripe /></p>
                <p><FaCcVisa /></p>
                <p><FaCcMastercard /></p>

            </div>
            <div className='madeByBox'>
                <p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                <p>Designed by WU07</p>
            </div>

            </div>
        </>
    )
}