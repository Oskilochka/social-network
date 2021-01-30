import React, {FC} from 'react'
import styles from './../Dialog.module.css'
import {NavLink} from "react-router-dom";
import friendPhoto from '../../../assets/img/logoFriend.jpg'

type DialogItemType = {
    name: string,
    id: number
}

export const DialogItem: FC<DialogItemType> = ({name, id}) => {
    let path = '/dialogs/' + id
    return (
        <NavLink className={styles.dialog} activeClassName={styles.activeItem} to={path}>
            <img className={styles.friendPhoto} src={friendPhoto} alt='friendPhoto'/>
            <h4>{name}</h4>
        </NavLink>
    )
}

