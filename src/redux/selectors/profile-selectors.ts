import {AppStateType} from "../redux-store";
export const getPostsSelector = (state: AppStateType) => state.profilePage.posts
export const getStatus = (state: AppStateType) => state.profilePage.status
export const getUserProfile = (state: AppStateType) => state.profilePage.userProfile
