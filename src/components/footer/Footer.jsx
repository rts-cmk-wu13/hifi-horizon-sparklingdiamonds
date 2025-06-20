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
        <section className='footer'>
            <div className='gridBox'>

                <div className='footerMenu'>
                    <p><NavLink to="/">Home</NavLink></p>
                    <p><NavLink to="products">Shop</NavLink></p>
                    <p><NavLink to="about">About Us</NavLink></p>
                </div>


                <div className='policyBox'>
                    <NavLink to="more-info"><p>Returns & Refunds</p></NavLink>
                    <NavLink to="more-info"><p>Delivery</p></NavLink>
                    <NavLink to="more-info"><p>Privacy Policy</p></NavLink>
                    <NavLink to="more-info"><p>Terms & Conditions</p></NavLink>
                </div>

                <div className='contactBox'>
                    <p>Contact</p>
                    <span className='contactBold'>
                        <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                        <p><span><FaPhoneAlt /></span>0131 556 7901</p>
                        <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                        <p><span><FaPhoneAlt /></span>01324 629 011</p>
                    </span>
                    <span className='socialsLinks'>
                        <p><NavLink to=""><FaFacebookSquare /></NavLink></p>
                        <p><NavLink to=""><FaTwitterSquare /></NavLink></p>
                        <p><NavLink to=""><FaInstagramSquare /></NavLink></p>
                        <p><NavLink to=""><FaSquareYoutube /></NavLink></p>
                    </span>
                </div>

            </div> {/* end of grid box */}
<hr />
<div className='footerBottom'>
            <div className='creditBox'>
                <p><FaCcStripe /></p>
                <p><FaCcVisa /></p>
                <p><FaCcMastercard /></p>

            </div>
            <span className='madeByBox'>
                <p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                <p>Designed by WU07</p>
            </span>

            </div>
            </section>
        </>
    )
}