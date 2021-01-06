import React from "react";
import s from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsForm from "./DialogsForm";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    let onSendMessageClick = (formData) => {
        console.log('Send is pressed');
        let newMessage = formData.newMessage
        props.sendNewMessage(newMessage);
        console.log(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.send}>
                <DialogsForm onSendMessageClick={onSendMessageClick}/>
            </div>
        </div>
    )
}
export default Dialogs;