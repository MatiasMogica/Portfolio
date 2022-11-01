import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default function NavBar() {
    return (
        <header>
            <nav>
                <div className="navContainer">
                    <ul>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/projets">PROJETS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}