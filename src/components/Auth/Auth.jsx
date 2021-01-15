import React from 'react'
import styles from "./Auth.module.css";

const Auth = () => {
    return (
        <div className={styles.wrap}>
            <form  className={styles.form}>
                <label> Email: </label>
                <input type='email' />
                <label> Password: </label>
                <input type='password' />
                <input className={styles.submitBtn} type='submit' value='Send'/>
            </form>
        </div>
    );
}

export default Auth;