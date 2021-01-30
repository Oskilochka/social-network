import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA'

type InitialStateType = typeof initialState

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captcha: null as string | null
}

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: {
        id: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => (
    {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
);

type setCaptchaType = {
    type: typeof SET_CAPTCHA,
    payload: {
        captcha: string
    }
}
export const setCaptcha = (captcha: string): setCaptchaType => ( {type: SET_CAPTCHA, payload: {captcha}});

type ActionsType = setCaptchaType | SetAuthUserDataType


export const getAuthUserData = () => async (dispatch: any) => {
    //async func return promise
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        const messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: messageError}))
    }
}
export const getCaptcha = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptcha()
    const captcha = response.data.url
    dispatch(setCaptcha(captcha))
}
export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;