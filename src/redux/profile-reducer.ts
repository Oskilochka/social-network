import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/commonTypes";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const DELETE_POST = 'DELETE_POST'
const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS'

type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hello everyone', likesCount: 12},
        {id: 2, message: 'Goodbye everyone', likesCount: 25},
    ] as Array<PostType>,
    userProfile: null as ProfileType | null,
    status: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
                userProfile: {...state.userProfile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string): AddPostType => ({type: ADD_POST, newPostText});
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId});
export const setUserProfile = (userProfile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, userProfile})
export const setUserProfileStatus = (status: string): SetUserProfileStatusType => ({
    type: SET_USER_PROFILE_STATUS,
    status
})
export const saveAvatarSuccess = (photos: PhotosType): SaveAvatarSuccessType => ({type: SAVE_AVATAR_SUCCESS, photos})


type AddPostType = {
    type: typeof ADD_POST,
    newPostText: string
}

type DeletePostType = {
    type: typeof DELETE_POST,
    postId: number
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    userProfile: ProfileType
}

type SetUserProfileStatusType = {
    type: typeof SET_USER_PROFILE_STATUS,
    status: string
}
type SaveAvatarSuccessType = {
    type: typeof SAVE_AVATAR_SUCCESS,
    photos: PhotosType
}

type ActionsType = AddPostType | DeletePostType | SetUserProfileType | SetUserProfileStatusType | SaveAvatarSuccessType;


export const getUserProfileThunk = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserProfileStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserProfileStatus(response.data))
}
export const updateUserProfileStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (!response.data.resultCode) {
            dispatch(setUserProfileStatus(status)
            )
        }
    } catch (error) {
        //dispatch
        alert('some error')
    }
}
export const saveAvatar = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.setAvatar(file)
    if (!response.data.resultCode) {
        dispatch(saveAvatarSuccess(response.data.data.photos)
        )
    }
}
export const saveProfileInfo = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let userId = getState().auth.id
    let response = await profileAPI.saveProfile(profile)
    if (!response.data.resultCode) {
        dispatch(getUserProfileThunk(userId))
    }
}

