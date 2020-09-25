import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="a"/>
           <div>
            {props.message}
           </div>
            <div>
            <button>like</button>
                ({props.count_like})
            </div>
        </div>
    )
}
export default Post;