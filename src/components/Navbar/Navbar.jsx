import React from 'react'
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import friendPhoto from '../../assets/img/logoFriend.jpg'

const Navbar = () => {
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

            {/*Rewrite friend block cause of duplication code*/}

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
        </div>
    );
}

export default Navbar;