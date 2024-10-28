import React from "react"
import airbnbLogo from "/images/airbnb-logo.png"
import "../style.css"

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={airbnbLogo} alt="airbnb logo" />
        </nav>
    )
}

export default Navbar;