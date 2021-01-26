import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {getFollowingProgress,getUsers} from "../../redux/selectors/user-selectors";
import {followThunk, unfollowThunk} from "../../redux/users-reducer";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/profileLogo.jpg";

export const UsersList = () => {
    const users = useSelector(getUsers)
    const followingProgress = useSelector(getFollowingProgress)
    const dispatch = useDispatch()
    return (
        <div className={styles.users}>
            {users.map(u => <div className={styles.user} key={u.id}>
                <NavLink to={'/profile/' + u.id} className={styles.friendLink} activeClassName={styles.activeLink}>
                    <h3 className={styles.userName}> {u.name} </h3>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </div>
                </NavLink>
                <div>
                    {u.followed
                        ? <button disabled={followingProgress.some(id => id === u.id)}
                                  className={styles.unfollowBtn}
                                  onClick={() => dispatch(unfollowThunk(u.id))}
                        > Unfollow </button>
                        : <button disabled={followingProgress.some(id => id === u.id)}
                                  className={styles.followBtn}
                                  onClick={() => dispatch(followThunk(u.id))}>
                            Follow </button>
                    }
                </div>
                <h4> {u.status} </h4>
            </div>)}
        </div>
    )
}

