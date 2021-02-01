import React, {FC} from 'react'
import styles from "./Auth.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsWrap/FormsWrap";
import {maxLength, required} from "../../utilities/validators/validators";
import {useSelector} from "react-redux";
import {getCaptcha} from "../../redux/selectors/auth-selectors";
import {LoginFormDataType} from "../../types/commonTypes";
import {Button} from "@material-ui/core";

const maxAuthLength = maxLength(50)

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit,error }) => {
    const captcha = useSelector(getCaptcha)
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
                    <img src={captcha} alt='captcha'/>
                    <Field component={Input} name={'captcha'} className={styles.captcha} type={'captcha'}/>
                </div> }
            </div>
            <button>
                <Button variant="contained" color="primary">
                    Log In
                </Button>
            </button>

        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormDataType>({
    form: 'login'
})(LoginForm)

