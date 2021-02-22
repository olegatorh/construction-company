import header_logo_pic from "../../img/icons/header_logo_pic.png";
import React from "react";
import {Link, Route} from 'react-router-dom'
import Contacts from "../Contacts/contacts";
function Header() {
    return(
        <header className="header">
            <div className="wrapper">
                <header className="header_wrapper">
                    <div className="header-logo">
                        <a href="/" className="header_logo-link">
                            <img src={header_logo_pic} className="header_logo_pic" alt="Taras Enterprise"/>
                        </a>
                    </div>
                    <nav className="header_naw">
                        <ul className="header_list">
                            <li className="header_item">
                                <Link className="header_link" to='/'>MAIN PAGE</Link>
                            </li>
                            <li className="header_item">
                                <Link className="header_link" to='/Gallery'>GALLERY</Link>
                            </li>
                            <li className="header_item">
                                <Link className="header_link" to='/Projects'>PROJECTS</Link>
                            </li>
                            <li className="header_item">
                                <a href="!#" className="header_link">CERTIFICATES</a>
                            </li>
                            <li className="header_item">
                                <Link className="header_link" to='/Contacts'>CONTACTS</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </header>
    )
}

export default Header