import React from 'react'
import styles from "./Settings.module.css";


const Settings = () => {
    return (
        <div className={styles.wrap}>
            <div>
                <h3>Change theme: </h3>
                <button className={styles.themeBtn}> Dark </button>
                <button className={styles.themeBtn}> Light </button>
            </div>
        </div>
    );
}

export default Settings;