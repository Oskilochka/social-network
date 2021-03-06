import React, {FC} from 'react'
import styles from "./Navbar.module.css";
import {NavbarItems} from "./NavbarItems";
import {NavbarFriends} from "./NavbarFriends";

export const Navbar: FC = () => {
    return (
        <div className={styles.wrap}>
            <NavbarItems/>
            <NavbarFriends/>
        </div>
    );
}

