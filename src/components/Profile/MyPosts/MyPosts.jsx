import React from 'react'
import styles from "./MyPosts.module.css";
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utilities/validators/validators";
import {Textarea} from "../../common/FormsWrap/FormsWrap";
import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";

const maxPostLength = maxLength(100)

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={styles.postInput} placeholder='Write whatever you want' name='newPostText'
                   validate={[required, maxPostLength]}
                   component={Textarea}
            />
            <button className={styles.addPostBtn}>Add post</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPosts = (props) => {
    const newPostText = useSelector(state => state.profilePage.newPostText)
    const posts = useSelector(state => state.profilePage.posts)
    const dispatch = useDispatch()
    const addPostFunc = (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    }

    let postsElements =
        posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    let addPost = (values) => {
        addPostFunc(values.newPostText)
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