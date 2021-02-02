import React, {FC} from 'react'
import styles from "./Auth.module.css";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../redux/selectors/auth-selectors";
import {AuthFormik} from "./AuthFormik";

const Auth: FC = () => {
    let isAuth = useSelector(getIsAuth)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={styles.wrap}>
            <h1> You need to Login </h1>
            <AuthFormik />
        </div>
    );
}
export default Auth;