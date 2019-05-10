import React from "react";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    
        return (
            <nav>
            
                <div className="nav-wrapper  navbar">
                    <NavLink to="/" className="brand-logo">Movies</NavLink>
                    <ul id="nav-mobile" className="right">
                        <i className="material-icons pointer">filter_list</i>
                    </ul>
                </div>
            </nav>
        )

}

export default NavBar