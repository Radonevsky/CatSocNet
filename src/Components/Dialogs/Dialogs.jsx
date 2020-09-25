import React from "react";
import s from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
       let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessageClick();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.newMessageChange(body);
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
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={'Enter your message'}></textarea>
                </div>
                <br/>
                <div>
                    <button onClick={onSendMessageClick}>Send Message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;