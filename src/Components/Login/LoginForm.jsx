import React from "react";
import {Field, Form} from "react-final-form";
import {FORM_ERROR} from 'final-form'
import s from './LoginForm.module.css';
import {
    required,
    maxLengthCreator,
    minLengthCreator,
    composeValidators
} from './../../utils/validators/validators.js';
import {Input} from "../common/FormsControls/FormsControls";

console.warn('Put the LoginForm style management in a separate file')
const LoginForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit} className={s.form}>
                <h2>Hello!</h2>
                <div>
                    <Field name="Login"
                           validate={composeValidators(required, maxLengthCreator(50), minLengthCreator(4))}>
                        {({input, meta}) => {
                            return (
                                <div>
                                    <Input {...input} {...meta} placeholder="Enter your e-mail or login"/>
                                </div>)
                        }}
                    </Field>
                </div>
                <div>
                    <Field name="Password" validate={required}>
                        {({input, meta}) => {
                            return (
                                <div>
                                    <Input {...input} {...meta}
                                           type={"password"}
                                           placeholder="Enter your password"/>
                                </div>)
                        }}
                    </Field>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )}
    />
)


export default LoginForm;