import React, {FC} from 'react'
import styles from './Dialog.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import { useSelector} from "react-redux";
import {setDialogs, setMessages} from "../../redux/selectors/dialogs-selectors";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {DialogsType, MessageType} from "../../types/commonTypes";
import {AddNewMessageFormik} from "./AddNewMessageFormik";

const Dialogs: FC = () => {
    const dialogs = useSelector(setDialogs)
    const messages = useSelector(setMessages)
    const dialogsElements = dialogs.map((d: DialogsType) => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = messages.map((m: MessageType) => <Message message={m.message} id={m.id}/>);

    return (
        <div className={styles.content}>
            <div className={styles.dialogsItems}> {dialogsElements} </div>
            <div className={styles.messagesItems}>
                <div> {messageElements} </div>
                <AddNewMessageFormik />
            </div>
        </div>
    )
}

export default compose(
    withAuthRedirect
)(Dialogs);
