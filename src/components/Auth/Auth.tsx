import React, {FunctionComponent} from 'react'
import styles from "./Auth.module.css";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "./AuthForm";
import {setIsAuth} from "../../redux/selectors/auth-selectors";

const Auth: FunctionComponent = () => {
    let isAuth = useSelector(setIsAuth)
    let dispatch = useDispatch()
    const onSubmit = (formData: any) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
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