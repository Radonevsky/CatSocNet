import {authAPI, usersAPI} from "../api/api";
import React from "react";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
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

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

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
            } else console.log('Email or password are false... try again')
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then (response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
                console.log('Logout!')
            }
        })
}

export default authReducer;