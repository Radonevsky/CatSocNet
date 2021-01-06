import React from "react";
import {Field, Form} from "react-final-form";

const LoginForm = (props) => (

    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <h2>Login page</h2>
                <div>
                    <label>Login</label><br/>
                    <Field placeholder={"Enter your e-mail or login"} name={"email"} component={"input"}/>
                </div>
                <div>
                    <label>Password</label><br/>
                    <Field placeholder={"Enter your password"} name={"password"} component={"input"}/>
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