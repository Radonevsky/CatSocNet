import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div className={s.img}>
        <img
            src="https://i.pinimg.com/originals/73/c3/9d/73c39da4f5cd90a45598fb83c9342e5a.jpg"
            alt="logo"/>
        <div className={s.descriptionBlock}>
            ava+descriptions
        </div>

    </div>

}
export default ProfileInfo;