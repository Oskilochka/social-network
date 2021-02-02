import React, {FC} from 'react'
import styles from "./Header.module.css";
import loginIcon from '../../assets/img/loginIcon.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/selectors/auth-selectors";
import {Button} from "@material-ui/core";

export const AuthLogic: FC = () => {
    let isAuth = useSelector(getIsAuth)
    let login = useSelector(getLogin)
    let dispatch = useDispatch()

    return (<>
            {
                isAuth ?
                    <> <h5> {login} </h5>
                        <NavLink to={'/login'}>
                            <Button variant="contained" color='secondary' onClick={() => dispatch(logout())} >Logout</Button>
                        </NavLink>
                    </>
                    : <NavLink to={'/login'} >
                            <Button variant="contained" >
                            <img className={styles.loginIcon} src={loginIcon} alt='login'/>
                            <span className={styles.loginBtn}>Login</span>
                        </Button>
                    </NavLink>
            }
        </>
    );
}
