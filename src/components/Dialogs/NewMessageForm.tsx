import React, {FC} from 'react'
import styles from './Dialog.module.css'
import {Field, reduxForm} from "redux-form";


type NewMessageFormType = {
    handleSubmit: any
}

const NewMessageForm: FC<NewMessageFormType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.newMessage}>
            <Field className={styles.textarea}  name='newMessageBody'
                   placeholder='Write your message here' component='input'
            />
            <button className={styles.send}>Send</button>
        </form>
    )
}

export const NewMessageFormRedux = reduxForm({form: 'NewMessageForm'})(NewMessageForm)
