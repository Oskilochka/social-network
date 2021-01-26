export const getUsers = state => state.usersPage.users
export const getUserSelector = state => getUsers(state).filter(u => true)
export const getCount = state => state.usersPage.count
export const getTotalUserCount = state => state.usersPage.totalUsersCount
export const getPage = state => state.usersPage.page
export const getIsFetching = state => state.usersPage.isFetching
export const getFollowingProgress = state => state.usersPage.followingProgress


/*
export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})*/
