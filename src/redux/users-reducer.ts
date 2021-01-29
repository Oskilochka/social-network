import {userAPI} from "../api/api";
import {updateObjectsInArray} from "../utilities/object-helpers";
import {UserType} from "../types/commonTypes";

const ACCEPT_UNFOLLOW = 'ACCEPT_UNFOLLOW';
const ACCEPT_FOLLOW = 'ACCEPT_FOLLOW';
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_FETCHING = 'SET_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

type InitialStateType = typeof initialState

let initialState = {
    users: [] as Array<UserType>, // array of users, data response from api request
    count: 9, //count of users on page
    totalUsersCount: 0, //amount of all users
    page: 1, //current page in pagination
    isFetching: false, //status of fetching data from server for create a loader
    followingProgress: [] as Array<number>
}

const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ACCEPT_FOLLOW: {
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case ACCEPT_UNFOLLOW: {
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, 'id', {followed: false})
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
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

//action creators
export const acceptFollow = (userId: number): AcceptFollowType => ({type: ACCEPT_FOLLOW, userId});
export const acceptUnfollow = (userId: number): AcceptUnfollowType => ({type: ACCEPT_UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setCurrentPage = (page: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, page})
export const setFetching = (isFetching: boolean): SetFetchingType => ({type: SET_FETCHING, isFetching})
export const setFollowingProgress = (isFetching: boolean, userId: number): SetFollowingProgressType => ({type: SET_FOLLOWING_PROGRESS, isFetching, userId})


type AcceptFollowType = {
    type: typeof ACCEPT_FOLLOW,
    userId: number
}

type AcceptUnfollowType = {
    type: typeof ACCEPT_UNFOLLOW,
    userId: number
}

type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    page: number
}

type SetFetchingType = {
    type: typeof SET_FETCHING,
    isFetching: boolean
}

type SetFollowingProgressType = {
    type: typeof SET_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}




//thunk creators
export const getUsersThunk = (page: number, count: number) => async (dispatch: any) => {
    dispatch(setFetching(true));
    dispatch(setCurrentPage(page));
    let data = await userAPI.getUsers(page, count)
    dispatch(setFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (!response.data.resultCode) {
        dispatch(actionCreator(userId))
    }
    dispatch(setFollowingProgress(false, userId))
}

export const unfollowThunk = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), acceptUnfollow)
}

export const followThunk = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), acceptFollow)
}

export default usersReducer;