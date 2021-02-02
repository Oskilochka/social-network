import React, {FC} from 'react'
import styles from "./MyPosts.module.css";
import {Post} from './Post/Post'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../redux/profile-reducer";
import {NewPostReduxForm} from "./NewPostForm";
import {getPostsSelector} from "../../../redux/selectors/profile-selectors";
import {PostType} from "../../../types/commonTypes";

export const MyPosts: FC = () => {
    const posts = useSelector(getPostsSelector)
    const dispatch = useDispatch()
    const addPostFunc = (newPostText: string) => {
        dispatch(actions.addPostActionCreator(newPostText));
    }

    let postsElements = posts.map((p: PostType) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )

    let addPost = (values: any) => {
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

