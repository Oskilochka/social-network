import React from 'react'
import styles from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsWrap/FormsWrap";
import {maxLength, required} from "../../utilities/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageCreator} from "../../redux/dialogs-reducer";

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
    const dialogs = useSelector(state => state.dialogsPage.dialogs)
    const messages = useSelector(state => state.dialogsPage.messages)
    const newMessageText = useSelector(state => state.dialogsPage.newMessageBody)

    const dispatch = useDispatch()
    const  sendMessage = (newMessageBody) => {
        dispatch(sendMessageCreator(newMessageBody))
    }

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>);
    let newMessageBody = newMessageText;

    let addNewMessage = (values) => sendMessage(values.newMessageBody)

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