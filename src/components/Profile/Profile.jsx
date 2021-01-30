import React, {useEffect} from 'react'
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getUserProfileStatus, getUserProfileThunk} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {MyPosts} from "./MyPosts/MyPosts";
import {getAuthUserId} from "../../redux/selectors/auth-selectors";

const Profile = (props) => {
    const authUserId = useSelector(getAuthUserId)

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
            <ProfileInfo isOwner={!props.match.params.userId}/>
            <MyPosts/>
        </div>
    );
}

export default compose(
    withRouter,
    withAuthRedirect
)(Profile);
