import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "202345fd-9a8d-44af-a260-1d7c2dbefc93"
    }
})

export const userAPI = {
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}`).then(
            response => response.data
        )
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },
    setAvatar(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put('profile/photo', formData
            /*   {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }}*/
        )
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}


