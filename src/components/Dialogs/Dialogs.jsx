import React from 'react'
import styles from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
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

const NewNessageFormRedux = reduxForm({form: 'NewNessageForm'})(NewNessageForm)

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => props.sendMessage(values.newMessageBody)

    return (
        <div className={styles.content}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                <div> {messageElements} </div>
                <NewNessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;