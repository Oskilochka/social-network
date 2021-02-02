import React, {FC} from 'react'
import styles from './../Dialog.module.css'

type MessageType = {
    message: string,
    id: number
}

export const Message: FC<MessageType> = ({message, id}) => {
    return (
        <div className={styles.message}>
            {id} {message}
        </div>
    )
}

