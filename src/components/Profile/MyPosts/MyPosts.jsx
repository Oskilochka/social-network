import React from 'react'
import value from "./MyPosts.module.css";
import Post from './Post/Post'


const MyPosts = (props) => {
    debugger;

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
        <div className={value.post}>
            <h2>My posts</h2>
            <div className={value.newPost}>
                <h4>New Post</h4>
                <div>
                    <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={value.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;