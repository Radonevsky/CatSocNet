import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    addPost: () => {
        dispatch(addPostActionCreator())
    },
    postChange: (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }

}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;