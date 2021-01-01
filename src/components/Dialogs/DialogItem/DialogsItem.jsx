import React from 'react'
import value from './../Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
            <NavLink className={value.dialog} activeClassName={value.activeItem} to={path}>
                <img className={value.img} src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.JPG' />
                {props.name}
            </NavLink>
    )
}

export default DialogItem;