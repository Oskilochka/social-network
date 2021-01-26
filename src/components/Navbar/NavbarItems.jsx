import React from 'react'
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const NavbarItems = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.navbar}>
                <div className={` ${styles.item} ${styles.active}`}>
                    <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
                </div>

                <div className={styles.item}>
                    <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink>
                </div>
            </div>
        </div>
    );
}

