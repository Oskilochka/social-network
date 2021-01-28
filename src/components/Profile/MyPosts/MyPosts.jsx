import React from 'react'
import styles from "./MyPosts.module.css";
import Post from './Post/Post'
import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {NewPostReduxForm} from "./NewPostForm";

const MyPosts = (props) => {
    const newPostText = useSelector(state => state.profilePage.newPostText)
    const posts = useSelector(state => state.profilePage.posts)
    const dispatch = useDispatch()
    const addPostFunc = (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    }

    let postsElements =
        posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}/>)

    let addPost = (values) => {
        addPostFunc(values.newPostText)
        values.newPostText = ""
    }

    return (
        <div className={styles.post}>
            <h2>My posts</h2>
            <div>
                <h4>New Post</h4>
                <div>
                    <NewPostReduxForm onSubmit={addPost}/>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;