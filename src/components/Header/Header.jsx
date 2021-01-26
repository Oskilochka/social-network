import React from 'react'
import styles from "./Header.module.css";
import headerIcon from '../../assets/img/headerIcon.png'
import loginIcon from '../../assets/img/loginIcon.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const Header = () => {

    let dispatch = useDispatch()
    let isAuth = useSelector(state => state.auth.isAuth)
    let login = useSelector(state => state.auth.login)

    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <img className={styles.headerIcon} src={headerIcon}/>
                <h1 className={styles.nameSite}>Racoon Social Network</h1>
            </div>
            <div className={styles.logWrap}>
                {isAuth ?
                    <> <h5> {login} </h5>
                        <NavLink to={'/login'} className={styles.login}>
                            <span onClick={() => dispatch(logout())} className={styles.loginBtn}>Logout</span>
                        </NavLink>
                    </>
                    : <NavLink to={'/login'} className={styles.login}>
                        <img className={styles.loginIcon} src={loginIcon}/>
                        <span className={styles.loginBtn}>Login</span>
                    </NavLink>
                }

            </div>
        </div>
    );
}

export default Header;