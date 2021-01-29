import React, {FunctionComponent} from 'react'
import styles from './../Dialog.module.css'

type MessageTYpe = {
    message: string
}

const Message: FunctionComponent<MessageTYpe> = ({message}) => {
    return (
        <div className={styles.message}>
            {message}
        </div>
    )
}

export default Message;