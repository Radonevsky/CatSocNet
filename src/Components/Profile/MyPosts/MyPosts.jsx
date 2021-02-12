import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} count_like={p.likesCount}/>);
    let onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div className={s.send}>
            <MyPostsForm onAddPost={onAddPost}/>
        </div>
        <div className={s.item}>
            {postsElements}
        </div>
    </div>
}

const MyPostsForm = (props) => (
    <Form
        onSubmit={props.onAddPost}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component={"textarea"} placeholder={"Enter your post"} name={"newPostText"} className={s.textarea}/>
                </div>
                <div>
                    <button type="submit" className={s.button}>Add post</button>
                </div>
            </form>
        )}
    />
)
export default MyPosts;