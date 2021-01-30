import React, {FC} from 'react'
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import friendPhoto from '../../assets/img/logoFriend.jpg'

export const NavbarFriends: FC = () => {
    return (
        <div className={styles.friends}>
            <h2 className={styles.header}>Friends</h2>
            <div className={styles.friendsWrap}>
                <div className={styles.friend}>
                    <NavLink to='/dialogs/2' className={styles.friendLink} activeClassName={styles.activeLink}>
                        <img className={styles.img} src={friendPhoto}/>
                        <h3>Vadim</h3>
                    </NavLink>
                </div>
                <div className={styles.friend}>
                    <NavLink to='/dialogs/1' className={styles.friendLink} activeClassName={styles.activeLink}>
                        <img className={styles.img} src={friendPhoto}/>
                        <h3>Julia</h3>
                    </NavLink>
                </div>
                <div className={styles.friend}>
                    <NavLink to='/dialogs/3' className={styles.friendLink} activeClassName={styles.activeLink}>
                        <img className={styles.img} src={friendPhoto}/>
                        <h3>Sasha</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
