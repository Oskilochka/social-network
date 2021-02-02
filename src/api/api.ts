import axios from "axios";
import {UserType} from "../types/commonTypes";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "202345fd-9a8d-44af-a260-1d7c2dbefc93"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type ResponseDataType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}