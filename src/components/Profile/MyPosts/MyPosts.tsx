import React, {FC} from 'react'
import styles from "./MyPosts.module.css";
import {Post} from './Post/Post'
import { useSelector} from "react-redux";
import {getPostsSelector} from "../../../redux/selectors/profile-selectors";
import {PostType} from "../../../types/commonTypes";
import {AddPostFormik} from "./AddPostFormik";

export const MyPosts: FC = () => {
    const posts = useSelector(getPostsSelector)
    let postsElements = posts.map((p: PostType) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )
    return (
        <div className={styles.post}>
            <h2>My posts</h2>
            <div>
                <h4>New Post</h4>
                <div>
                    <AddPostFormik />
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

