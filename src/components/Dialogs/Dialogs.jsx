import React from 'react'
import styles from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messageElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;

    let sendMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewBodyMessage(body);
    }

    return (
        <div className={styles.content}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                <div>
                    {messageElements}
                </div>
                <div className={styles.newMessage}>
                    <textarea onChange={ onNewMessageChange }
                              value={ newMessageBody }
                              placeholder='Enter you message'
                              className={styles.textarea}>
                    </textarea>
                    <button onClick={sendMessage} className={styles.send}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;