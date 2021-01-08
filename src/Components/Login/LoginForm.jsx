import React from "react";
import {Field, Form} from "react-final-form";
import s from './LoginForm.module.css';

const required = value => (value ? undefined : 'Required')
//const hasError
console.warn('Put the LoginForm style management in a separate file')
const LoginForm = (props) => (

    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className={s.form}>
                <h2>Hello!</h2>
                <div>
                    <Field name="email" validate={required}>
                        {({input, meta}) => {
                            let hasError = meta.error && meta.touched;
                            return (
                                <div>
                                    <span className={hasError ? s.spanError : ''}>Login</span>
                                    <br/>
                                    <input {...input}
                                           className={hasError ? s.input + ' ' + s.errorInput : s.input}
                                           placeholder="Enter your e-mail or login"/>
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