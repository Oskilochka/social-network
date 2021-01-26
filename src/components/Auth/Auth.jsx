import React from 'react'
import styles from "./Auth.module.css";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "./AuthForm";

const Auth = (props) => {
    let isAuth = useSelector(state => state.auth.isAuth)
    let dispatch = useDispatch()
    const onSubmit = (formData) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.wrap}>
            <h1> You need to Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
export default Auth;    