import React from "react";
import {Field, Form} from "react-final-form";
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
                <h2>Please enter your username and password</h2>
                <div>
                    <Field name="email"
                           validate={composeValidators(required, maxLengthCreator(50), minLengthCreator(4))}>
                        {({input, meta}) => {
                            return (
                                <div>
                                    <span>Login</span>
                                    <div>
                                        <Input {...input} {...meta} placeholder="Enter your e-mail or login"/>
                                    </div>
                                </div>)
                        }}
                    </Field>
                </div>
                <div>
                    <Field name="password" validate={required}>
                        {({input, meta}) => {
                            return (
                                <div>
                                    <span>Password</span>
                                    <div>
                                        <Input {...input} {...meta}
                                               type={"password"}
                                               placeholder="Enter your password"/>
                                    </div>
                                </div>)
                        }}
                    </Field>
                </div>
                <div>
                    {submitError && <div className={s.error}>Error! {submitError}</div>}
                </div>
                <div>
                    <label>Remember me</label>
                    <Field name="rememberMe" component="input" type="checkbox"/>
                </div>
                {props.captchaUrl && <div className={s.captcha}>
                    <img src={props.captchaUrl} alt="please refresh"/></div>}
                {props.captchaUrl && <Field name="captcha" validate={required}>
                    {({input, meta}) => {
                        return (
                            <div>
                                <span>Please enter the captcha</span>
                                <div>
                                    <Input {...input} {...meta}
                                           placeholder="Enter the captcha"/>
                                </div>
                            </div>)
                    }}
                </Field>}
                <div className={s.login}>
                    <button type="submit">Login</button>
                </div>

            </form>
        )}

    />

)


export default LoginForm;