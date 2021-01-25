import {authAPI, usersAPI} from "../api/api";
import React from "react";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_SUBMIT_ERROR = 'SET_SUBMIT_ERROR';
const CLEAR_SERVER_ERROR = 'CLEAR_SERVER_ERROR';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    serverError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        case SET_SUBMIT_ERROR:
            return {
                ...state,
                serverError: action.error
            };

        case CLEAR_SERVER_ERROR:
            return {
                ...state,
                serverError: null
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});
export const setSubmitError = error => ({type: SET_SUBMIT_ERROR, error: error});
export const clearServerError = () => ({type: CLEAR_SERVER_ERROR})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        });
}

export const signIn = (formData) => (dispatch) => {

    authAPI.login(formData)
        .then(response => {
            if (response.data.resultCode === 0) {
                console.log('login!')
                dispatch(getAuthUserData());
                dispatch(clearServerError());
            } else {
                console.log('error! dispatching...');
            let error = response.data.messages;
                dispatch(setSubmitError(error));

            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
                console.log('Logout!')
            }
        })
}

export default authReducer;