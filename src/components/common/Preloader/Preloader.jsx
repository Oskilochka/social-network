import React from 'react'
import styles from "../../Users/Users.module.css";
import preloader from "../../../assets/img/loader2.gif";


const Preloader = (props) => {
    return (
        <div>
            <img className={styles.preloader} src={preloader}/>
        </div>
    );
}

export default Preloader;