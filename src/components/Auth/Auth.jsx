import React from 'react'
import styles from "./Auth.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsWrap/FormsWrap";
import {maxLength, required} from "../../utilities/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxAuthLength = maxLength(50)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            {props.error && <h2> {props.error} </h2>}
            <label> Email: </label>
            <Field type='email' validate={[required, maxAuthLength]} component={Input} name={'email'}
                   placeholder={'Email'}/>
            <label> Password: </label>
            <Field type='password' validate={[required, maxAuthLength]} component={Input} name={'password'}
                   placeholder={'Password'}/>
            <div className={styles.rememberDiv}>
                <h5>remember me</h5>
                <Field component={Input} name={'rememberMe'} className={styles.rememberCheck} type={'checkbox'}/>
            </div>

            <button className={styles.submitBtn}>Log In</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

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
