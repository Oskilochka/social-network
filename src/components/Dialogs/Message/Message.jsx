import React from 'react'
import value from './../Dialog.module.css'

const Message = (props) => {
    return (
        <div className={value.message}>
            {props.message}

        </div>
    )
}

export default Message;