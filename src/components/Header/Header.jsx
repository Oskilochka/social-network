import React from 'react'
import styles from "./Header.module.css";
import headerIcon from '../../assets/img/headerIcon.png'
import loginIcon from '../../assets/img/loginIcon.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <img className={styles.headerIcon} src={headerIcon} />
                <h1 className={styles.nameSite}>Racoon Social Network</h1>
            </div>
            <div className={styles.logWrap}>
                { props.isAuth ? <h5> {props.login} </h5>
                :  <NavLink to={'/login'}   className={styles.login}>
                        <img className={styles.loginIcon} src={loginIcon} />
                        <span className={styles.loginBtn} >Login</span>
                    </NavLink>
                }

            </div>
        </div>
    );
}

export default Header;