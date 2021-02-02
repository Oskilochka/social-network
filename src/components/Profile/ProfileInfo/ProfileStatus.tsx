import React, {useEffect, useState, FC} from 'react'
import { ChangeEvent } from 'react';
import {useDispatch} from "react-redux";
import {updateUserProfileStatus} from "../../../redux/profile-reducer";

type ProfileStatusType = {
    status: string,
    isOwner: boolean
}

export const ProfileStatus: FC<ProfileStatusType> = ({status, isOwner}) => {
    let [editMode, setEditMode] = useState(false)
    let [localStatus, setStatus] = useState(status)

    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(status)
    }, [status])

    let toggleEditMode = () => {
        if (isOwner) {
            if (editMode) {
                setEditMode(false);
                dispatch(updateUserProfileStatus(localStatus))
            } else {
                setEditMode(true)
            }
        }
    }

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (<>
            {editMode
                ?
                <div>
                    <input autoFocus={true} onChange={onStatusChange} value={localStatus}
                           onBlur={toggleEditMode}/>
                </div>
                :
                <div>
                    <span onDoubleClick={toggleEditMode}> {status || 'samurai'} </span>
                </div>
            }
        </>
    )
}

