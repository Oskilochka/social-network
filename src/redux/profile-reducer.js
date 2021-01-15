import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hello everyone', likesCount: '12'},
        {id: 2, message: 'Goodbye everyone', likesCount: '24'},
    ],
    newPostText: '',
    userProfile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})


export const getUserProfileThunk = (userId) => (dispatch) => {
    userAPI.getUserProfile(userId).then( response => {
        dispatch(setUserProfile(response.data))
    })
}

export default profileReducer;