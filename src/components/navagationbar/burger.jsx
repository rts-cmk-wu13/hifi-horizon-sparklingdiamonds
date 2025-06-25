import './navStyle.scss'

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import SearchBar from '../SearchBar/SearchBar'

import { FaUser, FaShoppingCart } from "react-icons/fa";


export default function BottomBurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);



    return (
        <div className="bottom-menu-container">

            {showSearch && (
                <SearchBar />
            )}
            <div className='bottomMenuBar'>
                <div className={`menu-drawer ${isOpen ? "open" : ""}`}>
                    <NavLink to="/"><img src='/logo.svg' alt="logo" /></NavLink>
                    <NavLink className="menuLink" to="products">SHOP</NavLink>
                    <NavLink className="menuLink" to="about">ABOUT US</NavLink>
                    <NavLink className="menuLink" to="contact">CONTACT US</NavLink>

                </div>
                <button className="search-icon" onClick={() => setShowSearch(!showSearch)}>
                    <FaSearch />
                </button>

                <button className='ToprofileBTN'>
                    <NavLink className="menuLink" to="profile"><FaUser /></NavLink>
                </button>
                <button className='ToCartBTN'>
                    <NavLink className="menuLink" to="cart"><FaShoppingCart /></NavLink>
                </button>

                <button
                    className="burger-toggle-menu" onClick={() => setIsOpen((prev) => !prev)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

        </div>
    );
}
