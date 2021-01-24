import React from 'react'
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styles.info}>
                <img className={styles.img} src={props.userProfile.photos.large}/>
                <div>
                    <h3> {props.userProfile.fullName} </h3>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <h4> {props.userProfile.lookingForAJobDescription} </h4>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;