import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let toggleEditMode = () => {
        if (editMode) {
            setEditMode(false);
            props.updateStatus(status)
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