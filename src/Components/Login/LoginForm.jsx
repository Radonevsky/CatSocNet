import React from "react";
import {Field, Form} from "react-final-form";
import {FORM_ERROR} from 'final-form'
import s from './LoginForm.module.css';
import {required,
    maxLengthCreator,
    minLengthCreator,
    composeValidators} from './../../utils/validators/validators.js';
import {Input} from "../common/FormsControls/FormsControls";

console.warn('Put the LoginForm style management in a separate file')
const LoginForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit} className={s.form}>
                <h2>Hello!</h2>
                <div>
                    <Field name="email"
                           validate={composeValidators(required, maxLengthCreator(10), minLengthCreator(4))}>
                        {({input, meta}) => {
                            let hasError = meta.error && meta.touched;
                            return (
                                <div>
                                    <span className={hasError ? s.spanError : ''}>Login</span>
                                    <br/>
                                    <Input {...input} placeholder="Enter your e-mail or login"
                                           className={hasError ? s.input + ' ' + s.errorInput : s.input}/>
                                    {meta.error && meta.touched && <span className={s.spanError}>{meta.error}</span>}
                                </div>)
                        }}
                    </Field>
                </div>
                <div>
                    <Field name="password" validate={required}>
                        {({input, meta}) => {
                            let hasError = meta.error && meta.touched;
                            return (
                                <div>
                                    <span className={hasError ? s.spanError : ''}>Password</span>
                                    <br/>
                                    <input {...input}
                                           type={"password"}
                                           className={hasError ? s.input + ' ' + s.errorInput : s.input}
                                           placeholder="Enter your password"/>
                                    {meta.error && meta.touched && <span className={s.spanError}>{meta.error}</span>}
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