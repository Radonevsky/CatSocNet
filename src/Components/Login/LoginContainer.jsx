import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {signIn} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginContainer =(props) => {
    const onSubmit = async formData => {
        console.log('login pressed');
        const res = await props.signIn(formData);
        return res;
    }
        if (props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    serverError: state.auth.serverError,
    captchaUrl: state.auth.captchaUrl
})

export default connect (mapStateToProps, {signIn}) (LoginContainer);