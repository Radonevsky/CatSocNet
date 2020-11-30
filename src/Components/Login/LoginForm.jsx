import React from "react";
import {Field, Form} from "react-final-form";

const LoginForm = (props) => (

    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <h2>Login page</h2>
                <div>
                    <Field placeholder={"E-mail or login"} name={"email"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
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