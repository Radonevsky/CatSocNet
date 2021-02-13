import React from 'react';
import {useForm} from "react-hook-form";
import s from './ProfileInfoForm.module.css'
import toFirstUpperCase from "../../../utils/ToFirstUpperCase";

const ProfileInfoForm = (props) => {
    const {register, handleSubmit, errors, setError, clearErrors} = useForm();

    const onSubmit = async data => {
        console.log('submit pressed')
        const formData = {
            aboutMe: data.aboutMe,
            contacts: {
                facebook: data.facebook,
                website: data.website,
                vk: data.vk,
                twitter: data.twitter,
                instagram: data.instagram,
                youtube: data.youtube,
                github: data.github,
                mainLink: data.mainLink
            },
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            fullName: data.fullName
        }
        //console.log(formData);
        const serverError = await props.changeProfileInfo(formData);
        serverError ? setError("serverErrors", {
                message: serverError.errorMessages
            })
            : props.formEditMode();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <button onClick={()=>clearErrors("serverErrors")}>
                Save
            </button>
            {errors.serverErrors && <div name='serverErrors' ref={register}
                                         className={s.errors}>{errors.serverErrors.message.map(e=><div>{e}</div>)}</div>}

            <div className={s.formDiv}>
                <label>About me:</label><br/>
                <textarea name='aboutMe' defaultValue={props.aboutMe}
                          ref={register} className={s.textarea}
                />
            </div>
            <div className={s.formDiv}>
                <label for="lookingForAJob">Looking for a job</label>
                <input type="checkbox" name="lookingForAJob" ref={register}/>
            </div>
            <div className={s.formDiv}>
                <label>Job description:</label><br/>
                <textarea name='lookingForAJobDescription' defaultValue={props.lookingForAJobDescription}
                          ref={register} className={s.textarea}
                />
            </div>
            <div className={s.fullName}>
                <label for='fullName'>Your name</label>
                <input name='fullName' defaultValue={props.fullName}
                       ref={register({required: true, minLength: 4})}
                />
                {errors.fullName?.type === "required" && <span className={s.errors}>This field is required!</span>}
                {errors.fullName?.type === "minLength" && <span className={s.errors}>Min 4 characters!</span>}
                <div>

                    <span className={s.contacts}>Contacts:</span>
                    {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <>
                                <div className={s.contactsItem}>
                                    <label for={key}>{toFirstUpperCase(key)}</label>
                                    <input name={key} defaultValue={props.profile.contacts[key]}
                                           ref={register}/>
                                </div>
                            </>
                        )

                    })}
                </div>
            </div>
        </form>
    );

}

export default ProfileInfoForm;