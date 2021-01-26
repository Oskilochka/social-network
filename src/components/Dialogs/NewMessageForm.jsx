import React from 'react'
import styles from './Dialog.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsWrap/FormsWrap";
import {maxLength, required} from "../../utilities/validators/validators";

const maxMessageLength = maxLength(1000)

const NewNessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.newMessage}>
            <Field className={styles.textarea} component={Textarea} name='newMessageBody'
                   placeholder='Write your message here'
                   validate={[required, maxMessageLength]}
            />
            <button className={styles.send}>Send</button>
        </form>
    )
}

export const NewNessageFormRedux = reduxForm({form: 'NewNessageForm'})(NewNessageForm)
