import React from 'react'
import value from './../Dialog.module.css'
import {NavLink} from "react-router-dom";
import friendPhoto from '../../../assets/img/logoFriend.jpg'

type DialogItemType = {
    name: string,
    id: number
}

const DialogItem = ({name, id}: DialogItemType) => {
    let path = '/dialogs/' + id
    return (
        <NavLink className={value.dialog} activeClassName={value.activeItem} to={path}>
            <img className={value.friendPhoto} src={friendPhoto} alt='friendPhoto'/>
            {name}
        </NavLink>
    )
}

export default DialogItem;