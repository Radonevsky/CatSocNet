import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_SIGN_IN = 'SET_SIGN_IN';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_SIGN_IN:
            return {
                ...state,
                isAuth: true
            };

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});
export const setSignIn = () => ({type: SET_SIGN_IN});

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email))
            }
        });
}

export const signIn = (formData) => (dispatch) => {
    authAPI.login(formData)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setSignIn);
                    authAPI.me()
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                let {id, login, email} = response.data.data
                                dispatch(setAuthUserData(id, login, email))
                                console.log('login! ', id, login, email)
                            }
                        });
                }
                else console.log('email or password are false... try again')
            }
        )
}

export default authReducer;