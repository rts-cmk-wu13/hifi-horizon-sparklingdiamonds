import './dropdown.scss'
import { NavLink } from 'react-router'

export default function Drop() {

    return (
        <>
            <ul className='dropdown_outerMenu'>

                <NavLink className="menuLink" to="products">SHOP</NavLink>
                <ul className='content_dropdown'>
                    <li className='dropdown_items'><p>Browse Categories</p></li>
                    <li className='dropdown_items'><NavLink to="products">CD Players</NavLink></li>
                    <li className='dropdown_items'><NavLink to="products">DVD Players</NavLink></li>
                    <li className='dropdown_items'><NavLink to="products">Preamps</NavLink></li>
                    <li className='dropdown_items'><NavLink to="products">Speakers</NavLink></li>
                    <li className='dropdown_items'><NavLink to="products">Turntabels</NavLink></li>
                    <li className='dropdown_items'><NavLink to="products">Intergrated Amplifiers</NavLink></li>
                    <li className='dropdown_items'><NavLink to="products">Power Amplifiers</NavLink></li>
                    <li className='dropdown_items'><NavLink to="products">Tube Amplifiers</NavLink></li>

                </ul>

            </ul>
        </>
    )
}

