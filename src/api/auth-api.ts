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
        return instance.get<ResponseDataType<AuthMeResponseType>>('auth/me').then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<ResponseDataType<LoginResponseType>>('auth/login', {email, password, rememberMe}).then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login') as Promise<ResponseDataType>
    }
}