import React, {FunctionComponent} from 'react'
import styles from "./Header.module.css";
import loginIcon from '../../assets/img/loginIcon.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {setIsAuth, setLogin} from "../../redux/selectors/auth-selectors";

export const AuthLogic: FunctionComponent = () => {

    let dispatch = useDispatch()
    let isAuth = useSelector(setIsAuth)
    let login = useSelector(setLogin)

    return (<>
            {
                isAuth ?
                    <> <h5> {login} </h5>
                        <NavLink to={'/login'} className={styles.login}>
                            <span onClick={() => dispatch(logout())} className={styles.loginBtn}>Logout</span>
                        </NavLink>
                    </>
                    : <NavLink to={'/login'} className={styles.login}>
                        <img className={styles.loginIcon} src={loginIcon} alt='login'/>
                        <span className={styles.loginBtn}>Login</span>
                    </NavLink>
            }
        </>
    );
}
