import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
}
export const getUserSelector = (state) => {
    return getUsers(state).filter( u => true )
}


export const getUsersSuper = createSelector( getUsers, (users) => {
    return users.filter( u => true )

})
export const getCount = (state) => {
    return state.usersPage.count
}
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getPage = (state) => {
    return state.usersPage.page
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress
}
