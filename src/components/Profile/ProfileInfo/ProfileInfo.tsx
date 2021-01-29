import React, {useState} from 'react'
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import {useDispatch, useSelector} from "react-redux";
import userPhoto from "../../../assets/img/profileLogo.jpg";
import {saveAvatar} from "../../../redux/profile-reducer";
import {getStatus, getUserProfile} from "../../../redux/selectors/profile-selectors";
import {ProfileData} from "./ProfileData";
import {ProfileDataForm} from "./ProfileDataForm";

const ProfileInfo = ({isOwner}) => {
    let [editMode, setEditMode] = useState(false)

    const status = useSelector(getStatus)
    const updateStatus = useSelector(getStatus)
    const userProfile = useSelector(getUserProfile)
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
                <div>
                    <img className={styles.img} src={userProfile.photos.large || userPhoto}/>
                    {isOwner && <input type='file' onChange={onImageChange}/>}
                </div>
                <ProfileStatus isOwner={isOwner}  status={status} updateStatus={updateStatus}/>
                <div>
                    {editMode
                        ? <ProfileDataForm profile={userProfile} setEditMode={setEditMode}/>
                        : <div><ProfileData/>
                            {isOwner && <button onClick={() => {
                                setEditMode(true)
                            }}>Edit</button>}</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;