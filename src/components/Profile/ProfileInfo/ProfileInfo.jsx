import React from 'react'
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import {useDispatch, useSelector} from "react-redux";
import userPhoto from "../../../assets/img/profileLogo.jpg";
import {saveAvatar} from "../../../redux/profile-reducer";

const ProfileInfo = (props) => {
    const status = useSelector((state) => {
        return state.profilePage.status
    })
    const updateStatus = useSelector((state) => {
        return state.profilePage.status
    })

    const userProfile = useSelector((state) => {
        return state.profilePage.userProfile
    })

    const dispatch = useDispatch()

    const onImageChange = (e) => {
        if (e.target.files.length) {
            dispatch(saveAvatar(e.target.files[0]))
        }
    }

    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styles.info}>
                 <img className={styles.img} src={userProfile.photos.large || userPhoto}/>
                { props.isOwner && <input type='file' onChange={onImageChange}/> }
                <div>
                    <h3> {userProfile.fullName} </h3>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <h4> {userProfile.lookingForAJobDescription} </h4>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;