import React, {FC} from 'react'
import styles from "./Post.module.css";
import friendPhoto from '../../../../assets/img/logoFriend.jpg'

type PostType = {
    message: string,
    likesCount: number
}

export const Post: FC<PostType> = ({message, likesCount}) => {

    return (
        <div className={styles.item}>
            <div>
                <img className={styles.postImg} src={friendPhoto}/>
                <h5>{message}</h5>
            </div>
            <span>Like! {likesCount}</span>
        </div>
    )
}

