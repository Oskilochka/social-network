import * as React from 'react';
import {Formik, Field, Form} from 'formik';
import styles from "./Auth.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getCaptcha} from "../../redux/selectors/auth-selectors";
import {login} from "../../redux/auth-reducer";
import {Button} from "@material-ui/core";
import {FC} from "react";

type ValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

export const AuthFormik: FC = () => {
    const captcha = useSelector(getCaptcha)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues = {{
                    email: '',
                    password: '',
                    rememberMe: false,
                    captcha: ''
                }}
                onSubmit={(values: ValuesType) => {
                    dispatch(login(values.email, values.password, values.rememberMe, values.captcha))
                }}>
                {() => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="email"/>

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type='password' placeholder="password"/>

                        <label htmlFor="checkbox">Remember me</label>
                        <Field id="checkbox" name="checkbox" type='checkbox'/>

                        <div>
                            {captcha && <div>
                                <img src={captcha} alt='captcha'/>
                                <Field name={'captcha'} className={styles.captcha}/>
                            </div>}
                        </div>

                        <Button type="submit" color="primary">Login</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}