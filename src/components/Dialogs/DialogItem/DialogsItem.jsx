import React from 'react'
import value from './../Dialog.module.css'
import {NavLink} from "react-router-dom";
import friendPhoto from '../../../assets/img/logoFriend.jpg'


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
            <NavLink className={value.dialog} activeClassName={value.activeItem} to={path}>
                <img className={value.friendPhoto} src={friendPhoto} />
                {props.name}
            </NavLink>
    )
}

export default DialogItem;