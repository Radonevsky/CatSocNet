import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import lookingForAJob from '../../../assets/images/lookingForAJob.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user1.png";
import wallpaper from "../../../assets/images/wallpaper dream.png";
import ProfileInfoForm from "./ProfileInfoForm";
import toFirstUpperCase from "../../../utils/ToFirstUpperCase";


const ProfileInfo = (props) => {
    let [editProfileMode, toggleFormEditMode] = useState(false);
    const formEditMode = () => {
        toggleFormEditMode(!editProfileMode)
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return <div>

        <div className={s.img}>
            <img
                src={wallpaper}
                alt="logo"/>
        </div>

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

        <div className={s.fullName}>{props.profile.fullName}</div>
        <button onClick={formEditMode} className={s.changeButton}>Change profile info</button>
        <div className={s.profileWrapper}>
            {editProfileMode ? <ProfileInfoForm profile={props.profile} userId={props.userId}
                                                changeProfileInfo={props.changeProfileInfo}
                                                formEditMode={formEditMode}
                                                lookingForAJobDescription={props.profile.lookingForAJobDescription}
                                                fullName={props.profile.fullName}
                                                    aboutMe={props.profile.aboutMe}
                                                />
                : <ProfileData profile={props.profile}/>}
            <ProfilePhoto profile={props.profile} isOwner={props.isOwner}/>
        </div>
    </div>
}

const ProfileData = (props) => {

    return (
        <div className={s.infoBlock}>
            <b>About me:</b>
            <div>{props.profile.aboutMe}</div>
            <div>
                <b>My contacts:</b>
            </div>
            <div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
            <br/>
            <div>
                Job:
                {(props.profile.lookingForAJob) ?
                    <div className={s.jobImg}>
                        <img src={lookingForAJob}/> <br/>
                    </div> : ' I have a job'}
                <div>Job description: {props.profile.lookingForAJobDescription}</div>
            </div>

        </div>
    )
}

const ProfilePhoto = props => {
    let [editMode, togglePhotoEditMode] = useState(false);
    const photoEditMode = () => {
        togglePhotoEditMode(!editMode)
    }
    const onSelectAva = (e) => {
        if (e.target.files.length) {
            props.saveNewAva(e.target.files[0]);
        }
    }

    return (
        <div className={s.largeUserPhoto}>
            <img src={props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto} className={s.largeUserPhoto}/>
            {props.isOwner && <button className={s.changeButton} onClick={photoEditMode}>Change photo</button>}
            {editMode && <input type="file" onChange={onSelectAva} className="custom-file-input"/>}
        </div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div>{toFirstUpperCase(contactTitle)}: {contactValue}</div>
}

export default ProfileInfo;