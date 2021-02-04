import {PhotosType, PostType, ProfileType} from "../types/commonTypes";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./redux-store";
import {profileAPI} from "../api/profile-api";
import {ResultCodesEnum} from "../api/api";

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
        case "ADD_POST": {
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
        case "DELETE_POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case "SET_USER_PROFILE_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SAVE_AVATAR_SUCCESS": {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}

//action
type ActionsType = InferActionsType<typeof actions>

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: "ADD_POST", newPostText} as const),
    deletePost: (postId: number) => ({type: "DELETE_POST", postId} as const),
    setUserProfile: (userProfile: ProfileType) => ({type: "SET_USER_PROFILE", userProfile} as const),
    setUserProfileStatus: (status: string) => ({
        type: "SET_USER_PROFILE_STATUS",
        status
    } as const),
    saveAvatarSuccess: (photos: PhotosType) => ({type: "SAVE_AVATAR_SUCCESS", photos} as const)
}

//thunk
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>

export const getUserProfileThunk = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(actions.setUserProfile(data))
}
export const getUserProfileStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setUserProfileStatus(data))
}
export const updateUserProfileStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setUserProfileStatus(status)
            )
        }
    } catch (error) {
        //dispatch
        alert('some error')
    }
}
export const saveAvatar = (file: any): ThunkType => async (dispatch) => {
    let data = await profileAPI.setAvatar(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.saveAvatarSuccess(data.data.photos)
        )
    }
}
export const saveProfileInfo = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    let userId = getState().auth.id
    let data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getUserProfileThunk(userId!))
    }
}

