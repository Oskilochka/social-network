import React, {FC} from 'react'
import styles from './Dialog.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsWrap/FormsWrap";
import {maxLength, required} from "../../utilities/validators/validators";

const maxMessageLength = maxLength(1000)

type NewMessageFormType = {
    handleSubmit: any
}

const NewMessageForm: FC<NewMessageFormType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.newMessage}>
            <Field className={styles.textarea} component={Textarea} name='newMessageBody'
                   placeholder='Write your message here'
                   validate={[required, maxMessageLength]}
            />
            <button className={styles.send}>Send</button>
        </form>
    )
}

export const NewMessageFormRedux = reduxForm({form: 'NewMessageForm'})(NewMessageForm)
