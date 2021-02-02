import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getFollowingProgress,getUsers} from "../../redux/selectors/user-selectors";
import {followThunk, unfollowThunk} from "../../redux/users-reducer";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/profileLogo.jpg";
import {Button} from "@material-ui/core";
import {UserType} from "../../types/commonTypes";

export const UsersList: FC = () => {
    const users = useSelector(getUsers)
    const followingProgress = useSelector(getFollowingProgress)
    const dispatch = useDispatch()
    return (
        <div className={styles.users}>
            {users.map((u: UserType) => <div className={styles.user} key={u.id}>
                <NavLink to={'/profile/' + u.id} className={styles.friendLink} activeClassName={styles.activeLink}>
                    <h3 className={styles.userName}> {u.name} </h3>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto} alt='userPhoto'/>
                    </div>
                </NavLink>
                <div>
                    {u.followed
                        ? <Button variant="contained" color='secondary' disabled={followingProgress.some((id: number) => id === u.id)}
                                  onClick={() => dispatch(unfollowThunk(u.id))}
                        > Unfollow </Button>
                        : <Button variant="contained" color='primary' disabled={followingProgress.some((id: number) => id === u.id)}
                                  onClick={() => dispatch(followThunk(u.id))}>
                            Follow </Button>
                    }
                </div>
                <h4> {u.status} </h4>
            </div>)}
        </div>
    )
}

