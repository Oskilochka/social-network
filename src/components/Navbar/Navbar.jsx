import React from 'react'
import styles from "./Navbar.module.css";
import {NavbarItems} from "./NavbarItems";
import {NavbarFriends} from "./NavbarFriends";

const Navbar = () => {
    return (
        <div className={styles.wrap}>
            <NavbarItems/>
            <NavbarFriends/>
        </div>
    );
}

export default Navbar;