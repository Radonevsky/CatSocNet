import React from "react";
import {authAPI} from "../../api/api";
import LoginForm from "./LoginForm";
import {setAuthUserData} from "../../Redux/auth-reducer";


const LoginContainer = (props) => {
const onSubmit = (formData) => {
    console.log(formData);
    authAPI.login(formData)
        .then(response => { console.log('А щас ответ сервака:');
            console.log(response);
        /*if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        }*/
    });
}
return <LoginForm onSubmit={onSubmit}/>
        }



export default LoginContainer;