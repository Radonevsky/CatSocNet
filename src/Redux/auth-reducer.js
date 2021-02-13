import {authAPI, usersAPI} from "../api/api";
import React from "react";
import {FORM_ERROR} from "final-form";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});

export const getAuthUserData = () =>
    async (dispatch) => {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }

export const signIn = (formData) =>
    async (dispatch) => {
        let response = await authAPI.login(formData);
        if (response.data.resultCode === 0) {
            console.log('login!');
            dispatch(getAuthUserData());
        } else {
            console.log('Oops! ' + response.data.messages);
            return {[FORM_ERROR]: response.data.messages}
        }
    }

export const logout = () =>
    async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
            console.log('Logout!');
        }
    }
export default authReducer;