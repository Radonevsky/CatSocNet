import React from "react";
import {sendNewMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    // let newMessageBody = state.newMessageBody;

    let sendMessageClick = () => {
        props.store.dispatch(sendNewMessageCreator())
    }

    let newMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs sendMessageClick={sendMessageClick}
                 newMessageChange={newMessageChange}
                 messages={state.dialogsPage.messages}
                 dialogs={state.dialogsPage.dialogs}
                 newMessageBody = {state.dialogsPage.newMessageBody}
        />
    )
}
export default DialogsContainer;