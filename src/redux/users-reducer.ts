import {updateObjectsInArray} from "../utilities/object-helpers";
import {UserType} from "../types/commonTypes";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {userAPI} from "../api/user-api";

type InitialStateType = typeof initialState

let initialState = {
    users: [] as Array<UserType>, // array of users, data response from api request
    count: 9, //count of users on page
    totalUsersCount: 0, //amount of all users
    page: 1, //current page in pagination
    isFetching: false, //status of fetching data from server for create a loader
    followingProgress: [] as Array<number>
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ACCEPT_FOLLOW": {
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case "ACCEPT_UNFOLLOW": {
            return {
                ...state,
                users: updateObjectsInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case "SET_USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                page: action.page
            }
        }
        case "SET_FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "SET_FOLLOWING_PROGRESS": {
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
type ActionsType = InferActionsType<typeof actions>

export const actions = {
    acceptFollow: (userId: number) => ({type: "ACCEPT_FOLLOW", userId} as const),
    acceptUnfollow: (userId: number) => ({type: "ACCEPT_UNFOLLOW", userId} as const),
    setUsers: (users: Array<UserType>) => ({type: "SET_USERS", users} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: "SET_TOTAL_USERS_COUNT",
        totalUsersCount
    } as const),
    setCurrentPage: (page: number) => ({type: "SET_CURRENT_PAGE", page} as const),
    setFetching: (isFetching: boolean) => ({type: "SET_FETCHING", isFetching} as const),
    setFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: "SET_FOLLOWING_PROGRESS",
        isFetching,
        userId
    } as const),
}

//thunk creators
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>
type DispatchType = Dispatch<ActionsType>

export const getUsersThunk = (page: number, count: number): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching(true));
    dispatch(actions.setCurrentPage(page));
    let data = await userAPI.getUsers(page, count)
    dispatch(actions.setFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.setFollowingProgress(true, userId))
    let data = await apiMethod(userId)

    if (!data.resultCode) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.setFollowingProgress(false, userId))
}

export const unfollowThunk = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), actions.acceptUnfollow)
}

export const followThunk = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), actions.acceptFollow)
}

export default usersReducer;