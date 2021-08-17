import React from 'react'
import './Navbar.css'

export default function Navbar({ isScrolling }) {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"})
    }
    return (
        <div>
            <nav className={`navbar ${ isScrolling > 20 ? "scrolling" : null}`}>
                <div className="navbar-logo" onClick={toTheTop}>
                    Tadeo Mocoroa
                </div>
            </nav>
        </div>
    )
}
