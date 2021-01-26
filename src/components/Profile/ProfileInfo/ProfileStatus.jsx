import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../../../redux/selectors/profile-selectors";
import {updateUserProfileStatus} from "../../../redux/profile-reducer";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let toggleEditMode = () => {
        if (editMode) {
            setEditMode(false);
            dispatch(updateUserProfileStatus(status))
        } else {
            setEditMode(true)
        }
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
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
        </div>
    )
}

export default ProfileStatus;