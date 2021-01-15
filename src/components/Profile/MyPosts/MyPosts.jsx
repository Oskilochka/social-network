import React from 'react'
import styles from "./MyPosts.module.css";
import Post from './Post/Post'


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostsText(text);
    }

    return (
        <div className={styles.post}>
            <h2>My posts</h2>
            <div >
                <h4>New Post</h4>
                <div>
                    <textarea className={styles.postInput} ref={newPostElement} onChange={ onPostChange } value={props.newPostText} />
                </div>
                <div>
                    <button className={styles.addPostBtn} onClick={ onAddPost }>Add post</button>

                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;