import {PhotosType, ProfileType} from "../types/commonTypes";
import {instance, ResponseDataType} from "./api";


type SaveAvatarType = {
    photos: PhotosType
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>('profile/' + userId);
    },
    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId);
    },
    updateStatus(status: string) {
        return instance.put<ResponseDataType>('profile/status', {status: status})
    },
    setAvatar(file: any) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put<ResponseDataType<SaveAvatarType>>('profile/photo', formData
            /*   {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }}*/
        )
    },
    saveProfile(profile: ProfileType) {
        return instance.put('profile', profile)
    }
}