import React, {FC} from 'react'
import styles from "./Header.module.css";
import headerIcon from '../../assets/img/headerIcon.png'
import {AuthLogic} from "./AuthLogic";

export const Header: FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.header}>
                <img className={styles.headerIcon} src={headerIcon} alt='header'/>
                <h1 className={styles.nameSite}>Racoon Social Network</h1>
            </div>
            <div className={styles.logWrap}>
                <AuthLogic />
            </div>
        </div>
    );
}

