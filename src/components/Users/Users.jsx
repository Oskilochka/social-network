import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/img/profile logo.jpg'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    /* let pagesCount = Math.ceil(props.totalUsersCount / props.count);*/
    let pages = [];
    for (let i = 136; i <= 150; i++) {
        pages.push(i);
    }

    return <div className={styles.wrap}>
        <div className={styles.pagination}>
            {pages.map(p => {
                return <button onClick={() => {
                    props.onPageChange(p)
                }} className={styles.changePageBtn + ' ' + (props.page === p && styles.selected)}> {p} </button>
            })}
        </div>
        <div className={styles.users}>
            {props.users.map(u => <div className={styles.user} key={u.id}>
                <NavLink to={'/profile/' + u.id} className={styles.friendLink} activeClassName={styles.activeLink}>
                    <h3 className={styles.userName}> {u.name} </h3>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </div>
                </NavLink>
                <div>
                    {u.followed
                        ? <button disabled={props.followingProgress.some(id => id === u.id)}
                                  className={styles.unfollowBtn}
                                  onClick={() => props.unfollowThunk(u.id)}
                        > Unfollow </button>
                        : <button disabled={props.followingProgress.some(id => id === u.id)}
                                  className={styles.followBtn}
                                  onClick={() => props.followThunk(u.id)}>
                            Follow </button>
                    }
                </div>
                <h4> {u.status} </h4>
            </div>)}
        </div>
    </div>;
}

export default Users;