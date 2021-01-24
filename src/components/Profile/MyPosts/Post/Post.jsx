import React from 'react'
import styles from "./Post.module.css";
import friendPhoto from '../../../../assets/img/logoFriend.jpg'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div>
                <img className={styles.postImg} src={friendPhoto}/>
                <h5>{props.message}</h5>
            </div>
            <span>Like! {props.likeCount}</span>
        </div>
    )
}

export default Post;