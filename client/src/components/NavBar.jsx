import React from "react";

const NavBar = () => {
    
        return (
            <nav>
                <div className="nav-wrapper  navbar">
                    <a className="brand-logo">Movies</a>
                    <ul id="nav-mobile" className="right">
                        <i className="material-icons pointer">filter_list</i>
                    </ul>
                </div>
            </nav>
        )

}

export default NavBar