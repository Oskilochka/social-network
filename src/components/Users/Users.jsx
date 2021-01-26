import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCount, getFollowingProgress, getPage, getTotalUserCount, getUsers} from "../../redux/user-selectors";
import {followThunk, getUsersThunk, unfollowThunk} from "../../redux/users-reducer";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/profileLogo.jpg";


const UsersComponent = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUserCount)
    const count = useSelector(getCount)
    const page = useSelector(getPage)
    const followingProgress = useSelector(getFollowingProgress)

    const dispatch = useDispatch()


    const onPageChange = (pageNumber) => {
        dispatch(getUsersThunk(pageNumber, count))
    }

    useEffect(() => {
        dispatch(getUsersThunk(page, count))
    }, [])

    /* let pagesCount = Math.ceil(props.totalUsersCount / props.count);*/
    let pages = [];
    for (let i = 136; i <= 150; i++) {
        pages.push(i);
    }

    return (

        <div className={styles.wrap}>
            <div className={styles.pagination}>
                {pages.map(p => {
                    return <button onClick={() => {
                        onPageChange(p)
                    }} className={styles.changePageBtn + ' ' + (page === p && styles.selected)}> {p} </button>
                })}
            </div>

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
        </div>
    )
}

export default UsersComponent;