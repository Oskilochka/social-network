import {userAPI} from "../api/api";

const ACCEPT_UNFOLLOW = 'ACCEPT_UNFOLLOW';
const ACCEPT_FOLLOW = 'ACCEPT_FOLLOW';
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_FETCHING = 'SET_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

let initialState = {
    users: [], // array of users, data response from api request
    count: 9, //count of users on page
    totalUsersCount: 0, //amount of all users
    page: 1, //current page in pagination
    isFetching: false, //status of fetching data from server for create a loader
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCEPT_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case ACCEPT_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId ]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const acceptFollow = (userId) => ({type: ACCEPT_FOLLOW, userId});
export const acceptUnfollow = (userId) => ({type: ACCEPT_UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching})
export const setFollowingProgress = (isFetching, userId) => ({type: SET_FOLLOWING_PROGRESS, isFetching, userId})

//thunk creator
export const getUsersThunk = (page, count) => (dispatch) => {
    dispatch(setFetching(true));
    userAPI.getUsers(page, count).then(
        data => {
            dispatch(setFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        }
    )
}

export const unfollowThunk = (userId) => (dispatch) => {
    dispatch(setFollowingProgress(true, userId))
    userAPI.unfollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(acceptUnfollow(userId))
        }
        dispatch(setFollowingProgress(false, userId))
    });
}

export const followThunk = (userId) => (dispatch) => {
    dispatch(setFollowingProgress(true, userId))
    userAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(acceptFollow(userId))
        }
        dispatch(setFollowingProgress(false, userId))
    });
}

export default usersReducer;