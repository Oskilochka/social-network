import React from 'react'
import {useSelector} from "react-redux";
import {getUserProfile} from "../../../redux/selectors/profile-selectors";

export const ProfileData = (props) => {
    const userProfile = useSelector(getUserProfile)

    return (
        <div>
            <h3> {userProfile.fullName} </h3>
            <h4>About me: {userProfile.aboutMe}</h4>
            <h4>Looking for a job: {userProfile.lookingForAJob ? <span>Yes</span> : <span>No</span>}</h4>
            <h4> My skills: {userProfile.lookingForAJobDescription}</h4>
            <h4>Contacts: {Object.keys(userProfile.contacts).map(key => {
                return <Contact key={key} title={key} value={userProfile.contacts[key]}/>
            })} </h4>
        </div>
    )
}

const Contact = ({title, value}) => {
    return <a href={value}>{title} </a>
}



