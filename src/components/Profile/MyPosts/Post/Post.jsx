import React from 'react'
import value from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={value.item}>
            <div>
                <img src='https://patch.com/img/cdn20/users/22915293/20180406/115934/styles/raw/public/processed_images/shutterstock_584724292-1523027957-87.jpg' />
                <h5>{props.message}</h5>
            </div>
            <span>Like! {props.likeCount}</span>
        </div>
    )
}

export default Post;