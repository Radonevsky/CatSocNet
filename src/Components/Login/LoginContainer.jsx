import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {signIn} from "../../Redux/auth-reducer";

class LoginContainer extends React.Component {

    onSubmit = (formData) => {
        console.log('login pressed')
        this.props.signIn(formData);

    }

    render() {
        return <LoginForm onSubmit={this.onSubmit}/>
    }
}

let mapStateToProps = (state) => {

}
console.warn('mapStateToProps is empty!')
export default connect (mapStateToProps, {signIn}) (LoginContainer);