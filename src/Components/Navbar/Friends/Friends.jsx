import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={s.fr}>
            <div>
                <img src={props.avaPath} alt="logo"/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}
export default Friends;