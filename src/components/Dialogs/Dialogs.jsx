import React from 'react'
import styles from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {NewNessageFormRedux} from "./NewMessageForm";

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

    let addNewMessage = (values) => {
        sendMessage(values.newMessageBody)
        values.newMessageBody = ""
    }

    return (
        <div className={styles.content}>
            <div className={styles.dialogsItems}> {dialogsElements} </div>
            <div className={styles.messagesItems}>
                <div> {messageElements} </div>
                <NewNessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;