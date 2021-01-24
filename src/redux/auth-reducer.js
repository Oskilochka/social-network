import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
/*
type InitialStateType = typeof initialState;*/

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action/*: ActionsType*/) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

/*type SetAuthUserData = {
    type: typeof SET_USER_DATA,
    data: {
        id: number,
        email: string,
        login: string
    }
}*/

export const setAuthUserData = (id/*: number*/, email/*: string*/, login/*: string*/, isAuth)/*: SetAuthUserData*/ => (
    {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
);

export const getAuthUserData = () => async (dispatch) => {
    //async func return promise
    let response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: messageError}))
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
/*
type ActionsType = SetAuthUserData;*/

export default authReducer;