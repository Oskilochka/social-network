import {AppStateType} from "../redux-store";

export const getIsAuth = (state: AppStateType) => state.auth.isAuth
export const getAuthUserId = (state: AppStateType) => state.auth.id
export const getLogin = (state: AppStateType) => state.auth.login
export const getCaptcha = (state: AppStateType) => state.auth.captcha

