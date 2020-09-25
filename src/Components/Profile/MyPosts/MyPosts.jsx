import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} count_like={p.likesCount}/>);

    let onAddPost = () => {
        //props.dispatch(addPostActionCreator());
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        //    props.onPostChange(updateNewPostTextActionCreator(text));
        props.postChange(text);
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} placeholder={'Enter your post'} value={props.newPostText}>HUI</textarea>
            </div>

            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>

        </div>
        <div className={s.item}>
            {postsElements}

        </div>
    </div>

}
export default MyPosts;