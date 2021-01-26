import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const DELETE_POST = 'DELETE_POST'
const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS'

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
        case SAVE_AVATAR_SUCCESS: {
            return {
                ...state,
                profile: {...state.userProfile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserProfileStatus = (status) => ({type: SET_USER_PROFILE_STATUS, status})
export const saveAvatarSuccess = (photos) => ({type: SAVE_AVATAR_SUCCESS, photos})


export const getUserProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserProfileStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserProfileStatus(response.data))
}
export const updateUserProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (!response.data.resultCode) {
        dispatch(setUserProfileStatus(status)
        )
    }
}
export const saveAvatar = (file) => async (dispatch) => {
    let response = await profileAPI.setAvatar(file)
    if (!response.data.resultCode) {
        dispatch(saveAvatarSuccess(response.data.data.photos)
        )
    }
}

export default profileReducer;