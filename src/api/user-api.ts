import {GetItemsType, instance, ResponseDataType} from "./api";

export const userAPI = {
    getUsers(page = 1, count = 6) {
        return instance.get<GetItemsType>(`users?page=${page}&count=${count}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseDataType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`) as Promise<ResponseDataType>
    },
}