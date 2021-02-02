import {PhotosType, ProfileType} from "../types/commonTypes";
import {instance, ResponseDataType} from "./api";

type SaveAvatarType = {
    photos: PhotosType
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>('profile/' + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseDataType>('profile/status', {status: status}).then(res => res.data)
    },
    setAvatar(file: any) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put<ResponseDataType<SaveAvatarType>>('profile/photo', formData).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseDataType>('profile', profile).then(res => res.data)
    }
}