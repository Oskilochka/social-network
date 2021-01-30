import {AppStateType} from "../redux-store";

export const getUsers = (state: AppStateType) => state.usersPage.users
export const getUserSelector = (state: AppStateType) => getUsers(state).filter(u => true)
export const getCount = (state: AppStateType) => state.usersPage.count
export const getTotalUserCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getPage = (state: AppStateType) => state.usersPage.page
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingProgress = (state: AppStateType) => state.usersPage.followingProgress


/*
export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})*/
