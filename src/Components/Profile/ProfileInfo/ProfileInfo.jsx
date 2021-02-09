import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import lookingForAJob from '../../../assets/images/lookingForAJob.jpg'
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user1.png";
import styles from "../../Users/users.module.css";

const ProfileInfo = (props) => {

    let [editMode, togglePhotoEditMode] = useState(false);

    const photoEditMode = () => {
        togglePhotoEditMode(!editMode)
    }

        if (!props.profile) {
            return <Preloader/>
        }

        const onSelectAva = (e) => {
            if (e.target.files.length) {
                props.saveNewAva(e.target.files[0]);
            }
        }
        return <div>

            <div className={s.img}>
                <img
                    src="https://i.pinimg.com/originals/73/c3/9d/73c39da4f5cd90a45598fb83c9342e5a.jpg"
                    alt="logo"/>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.profileWrapper}>
                <div className={s.largeUserPhoto}>
                    <img src={props.profile.photos.large
                        ? props.profile.photos.large
                        : userPhoto} className={styles.largeUserPhoto}/>
                    {props.isOwner && <button onClick={photoEditMode}>Change photo</button>}
                    {editMode && <input type="file" onChange={onSelectAva} className="custom-file-input"/>}
                </div>

                <div className={s.descriptionBlock}>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    About me: <div>{props.profile.aboutMe}</div>
                    <br/>
                    My contacts
                    <div>Facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
                    <div>Website: <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></div>
                    <div>VK: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
                    <div>Twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>
                    <div>Instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
                    </div>
                    <div>YouTube: <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></div>
                    <div>GitHub: <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>
                    <div>MainLink: <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></div>
                    <br/>
                    <div>
                        Job:
                        {(props.profile.lookingForAJob) ?
                            <div className={s.jobImg}>
                                <img src={lookingForAJob}/> <br/>
                                {props.profile.lookingForAJobDescription}
                            </div> : ' I have a job'}
                    </div>

                </div>
            </div>
        </div>
    }
    export default ProfileInfo;