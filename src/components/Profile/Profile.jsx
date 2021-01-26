import React, {useEffect} from 'react'
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getUserProfileStatus, getUserProfileThunk} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    const authUserId = useSelector((state) => {
        return state.auth.id
    })

    const dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = authUserId
        }
        dispatch(getUserProfileThunk(userId));
        dispatch(getUserProfileStatus(userId));
    }, [props.match.params.userId])

    return (
        <div className={styles.content}>
            <ProfileInfo isOwner={!props.match.params.userId} userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatus} />
            <MyPosts  />
        </div>
    );
}

export default compose(
    withRouter,
    withAuthRedirect
)(Profile);