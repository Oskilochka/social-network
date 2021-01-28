import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA'
/*
type InitialStateType = typeof initialState;*/

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action/*: ActionsType*/) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA:
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
export const setCaptcha = (captcha) => ( {type: SET_CAPTCHA, playload: {captcha}});

export const getAuthUserData = () => async (dispatch) => {
    //async func return promise
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {dispatch(getCaptcha())}
        const messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: messageError}))
    }
}
export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captcha = response.data.url
    dispatch(setCaptcha(captcha))
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
/*
type ActionsType = SetAuthUserData;*/

export default authReducer;