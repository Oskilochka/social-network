import React, {useState, FC} from 'react'
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import {useDispatch, useSelector} from "react-redux";
import userPhoto from "../../../assets/img/profileLogo.jpg";
import {saveAvatar} from "../../../redux/profile-reducer";
import {getStatus, getUserProfile} from "../../../redux/selectors/profile-selectors";
import {ProfileData} from "./ProfileData";
import {ProfileDataForm} from "./ProfileDataForm";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Button} from "@material-ui/core";

type ProfileInfoType = {
    isOwner: boolean
}

export const ProfileInfo: FC<ProfileInfoType> = ({isOwner}) => {
    let [editMode, setEditMode] = useState(false)

    const status = useSelector(getStatus)
    const userProfile = useSelector(getUserProfile)
    const dispatch = useDispatch()

    const onImageChange = (e: any) => {
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
                    <img className={styles.img} src={userProfile.photos?.large || userPhoto} alt='userProfile'/>
                    {isOwner && <div>
                        <input onChange={onImageChange} className={styles.fileInput} accept="image/*"
                               id="icon-button-file" type="file"/>
                        <label onChange={onImageChange} htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera/>
                            </IconButton>
                        </label>
                    </div> }
                </div>
                <ProfileStatus isOwner={isOwner} status={status}/>
                <div>
                    {editMode
                        // @ts-ignore
                        ? <ProfileDataForm profile={userProfile} setEditMode={setEditMode}/>
                        : <div><ProfileData/>
                            {isOwner &&
                            <Button variant="contained" color="primary" onClick={() => {
                                setEditMode(true)
                            }}>Edit</Button>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
