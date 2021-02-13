import {profileAPI, usersAPI} from "../api/api";
import {FORM_ERROR} from "final-form";
import {getAuthUserData} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_NEW_AVA_SUCCESS = 'SAVE_NEW_AVA_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, it\'s my first React post', likesCount: '12'},
        {id: 2, message: 'Hello, how are you?', likesCount: '7'},
    ],
    profile: null,
    status: '',

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, (newPost)],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter((post) => post.id != action.postId)
            }
        }
        case SAVE_NEW_AVA_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.ava}
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText: newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const saveNewAvaSuccess = (ava) => ({type: SAVE_NEW_AVA_SUCCESS, ava})


export const getUserProfile = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }

export const getStatus = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }

export const updateStatus = (status) =>
    async (dispatch) => {
        console.log('update status...');
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
            console.log('Done!');
        }
    }

export const saveNewAva = (ava) =>
    async (dispatch) => {
        console.log('Saving the new photo...');
        let response = await profileAPI.setNewAva(ava);
        if (response.data.resultCode === 0) {
            dispatch(saveNewAvaSuccess(response.data.data.photos));
            console.log('New photo has been saved');
        }
    }

export const changeProfileInfo = (data) =>
    async (dispatch, getState) => {
        console.log('Sending the new profile info...');
        let response = await profileAPI.setNewProfileInfo(data);
        if (response.data.resultCode === 0) {
            const userId = getState().auth.userId;
            dispatch(getUserProfile(userId));
            console.log('New profile info has been saved');
        }
        else {
            console.log('Oops! ' + response.data.messages);
            return {errorMessages: response.data.messages}
        }

    }

export default profileReducer;