import React from 'react'
import styles from "./Auth.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsWrap/FormsWrap";
import {maxLength, required} from "../../utilities/validators/validators";
import {login} from "../../redux/auth-reducer";
import {useSelector} from "react-redux";

const maxAuthLength = maxLength(50)



const LoginForm = ({handleSubmit,error }) => {
    const captcha = useSelector(state => state.auth.captcha)
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {error && <h2> {error} </h2>}
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
            <div>
                {captcha && <div>
                    <img src={captcha} />
                    <Field component={Input} name={'captcha'} className={styles.captcha} type={'captcha'}/>
                </div> }
            </div>
            <button className={styles.submitBtn}>Log In</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

