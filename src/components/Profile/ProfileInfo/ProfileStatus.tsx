import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {updateUserProfileStatus} from "../../../redux/profile-reducer";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let toggleEditMode = () => {
        if (props.isOwner) {
            if (editMode) {
                setEditMode(false);
                dispatch(updateUserProfileStatus(status))
            } else {
                setEditMode(true)
            }
        }
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (<>
            {editMode
                ?
                <div>
                    <input autoFocus={true} onChange={onStatusChange} value={status}
                           onBlur={toggleEditMode}/>
                </div>
                :
                <div>
                    <span onDoubleClick={toggleEditMode}> {props.status || 'no status'} </span>
                </div>
            }
        </>
    )
}

export default ProfileStatus;