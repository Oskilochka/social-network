import {instance, ResponseDataType} from "./api";

type AuthMeResponseType = {
    id: number
    email: string
    login: string
}
type LoginResponseType = {
    userId: number
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseDataType<AuthMeResponseType>>('auth/me')
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<ResponseDataType<LoginResponseType>>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}