import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    // let newPostElement = React.createRef();

    let addPost = () => {
        //let text = newPostElement.current.value;
        props.store.dispatch(addPostActionCreator());
    }

    let postChange = (text) => {
        //let text = newPostElement.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return <MyPosts addPost={addPost}
                    postChange={postChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />

}
export default MyPostsContainer;