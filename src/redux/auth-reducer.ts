import {ResultCodesEnum} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

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
        case "SET_USER_DATA":
        case "SET_CAPTCHA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


//actions
type ActionsType = InferActionsType<typeof actions>

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
        {type: "SET_USER_DATA", payload: {id, email, login, isAuth}}),
    setCaptcha: (captcha: string) => ({type: "SET_CAPTCHA", payload: {captcha}})
}

//thunk
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    //async func return promise
    const data = await authAPI.authMe()
    if (data.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
            await dispatch(getCaptcha())
        }
    }
}
export const getCaptcha = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captcha = data.url
    dispatch(actions.setCaptcha(captcha))
}
export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer;