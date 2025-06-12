import { NavLink } from "react-router"

import LogoutButton from "./LogoutButton"


export default function Navegation() {

    
    return (
        <>

        <nav className="nav__links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statements">Statements</NavLink>
            <NavLink to="/secrets">Secrets</NavLink>
            {location.pathname !== '/login' && (
                    <>
                        <LogoutButton/> 
                    </>
                )}

        </nav>
        </>
    )
}