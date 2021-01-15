import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "202345fd-9a8d-44af-a260-1d7c2dbefc93"
    }
})

export const userAPI = {
    getUsers (page, count) {
        return instance.get(`users?page=${page}&count=${count}`).then(
            response => response.data
        )
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile (userId) {
        return instance.get('profile/' + userId);
    }
}

export const authAPI = {
    authMe () {
        return instance.get('auth/me')
    }
}


