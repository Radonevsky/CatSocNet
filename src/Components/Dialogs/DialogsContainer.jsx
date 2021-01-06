import React from "react";
import {sendNewMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
         messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

export default compose (
    connect (mapStateToProps, {sendNewMessage}),
    withAuthRedirect
)(Dialogs);