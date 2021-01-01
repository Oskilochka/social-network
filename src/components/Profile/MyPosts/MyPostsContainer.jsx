import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostsText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
