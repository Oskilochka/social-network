import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello everyone', likesCount: '12'},
        {id: 2, message: 'Goodbye everyone', likesCount: '24'},
    ],
    userProfile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case SET_USER_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserProfileStatus = (status) => ({type: SET_USER_PROFILE_STATUS, status})


export const getUserProfileThunk = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getUserProfileStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserProfileStatus(response.data))
    })
}
export const updateUserProfileStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserProfileStatus(status)
            )
        }
    })
}

export default profileReducer;