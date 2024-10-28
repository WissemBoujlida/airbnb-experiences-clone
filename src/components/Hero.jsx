import React from "react"
import heroImg from "/images/photo-grid.png"
import "../style.css"

function Hero() {
    return (
        <section className="hero">
            <img className="hero--img" src={heroImg} alt="hero image" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;