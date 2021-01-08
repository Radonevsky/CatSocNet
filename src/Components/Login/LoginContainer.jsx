import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {signIn} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {

    onSubmit = (formData) => {
        console.log('login pressed')
        this.props.signIn(formData);

    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return <LoginForm onSubmit={this.onSubmit}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
console.warn('mapStateToProps is empty!')
export default connect (mapStateToProps, {signIn}) (LoginContainer);