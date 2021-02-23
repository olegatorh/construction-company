import header_logo_pic from "../../img/icons/header_logo_pic.png";
import React from "react";
import styles from "./header.module.sass"
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header className={styles.header}>
            <div className="wrapper">
                <header className={styles.header_wrapper}>
                    <div>
                        <a href="/" className={styles.header_logo_link}>
                            <img src={header_logo_pic} className={styles.header_logo_pic} alt="Taras Enterprise"/>
                        </a>
                    </div>
                    <nav>
                        <ul className={styles.header_list}>
                            <li className={styles.header_item}>
                                <Link className={styles.header_link} to='/'>MAIN PAGE</Link>
                            </li>
                            <li className={styles.header_item}>
                                <Link className={styles.header_link} to='/Gallery'>GALLERY</Link>
                            </li>
                            <li className={styles.header_item}>
                                <Link className={styles.header_link} to='/Projects'>PROJECTS</Link>
                            </li>
                            <li className={styles.header_item}>
                                <a href="!#" className={styles.header_link}>CERTIFICATES</a>
                            </li>
                            <li className={styles.header_item}>
                                <Link className={styles.header_link} to='/Contacts'>CONTACTS</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </header>
    )
}

export default Header