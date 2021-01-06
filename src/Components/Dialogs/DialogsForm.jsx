import React from "react";
import {Field, Form} from "react-final-form";

const DialogsForm = (props) => (
    <Form
        onSubmit={props.onSendMessageClick}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component={"input"} placeholder={"Enter your message"} name={"newMessage"}/>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        )}
    />
)


export default DialogsForm;