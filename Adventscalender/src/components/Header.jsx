import React from "react"
import '../App.css'

export const Header = () => {
    return (
        <div className="header" >
                    <h1 className="header-title" >Adventskalender</h1>
            <nav className="header-menue" >
                <ul className="header-menue-list" >
                    <li className="header-menue-item" ><a href="#">Startseite</a></li>
                    <li className="header-menue-item" ><a href="#">Kontakt</a></li>
                    <li className="header-menue-item" ><a href="#">Impressum</a></li>
                </ul>
            </nav>
        </div>
    )
}