import React, {FC} from 'react'
import styles from './Dialog.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {NewMessageFormRedux} from "./NewMessageForm";
import {setDialogs, setMessages} from "../../redux/selectors/dialogs-selectors";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {actions} from "../../redux/dialogs-reducer";
import {DialogsType, MessageType} from "../../types/commonTypes";

const Dialogs: FC = () => {
    const dialogs = useSelector(setDialogs)
    const messages = useSelector(setMessages)

    const dispatch = useDispatch()

    const sendMessage = (newMessageBody: string) => {
        dispatch(actions.sendMessageCreator(newMessageBody))
    }

    const dialogsElements = dialogs.map((d: DialogsType) => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = messages.map((m: MessageType) => <Message message={m.message} id={m.id}/>);

    let addNewMessage = (values: any) => {
        sendMessage(values.newMessageBody)
        values.newMessageBody = ""
    }

    return (
        <div className={styles.content}>
            <div className={styles.dialogsItems}> {dialogsElements} </div>
            <div className={styles.messagesItems}>
                <div> {messageElements} </div>
                <NewMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default compose(
    withAuthRedirect
)(Dialogs);
