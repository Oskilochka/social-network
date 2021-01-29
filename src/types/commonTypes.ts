export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number,
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    contacts: ContactsType,
    photos: PhotosType
}

export type UserType = {
    id: number,
    name: string,
    photos: PhotosType,
    status: string | null
    followed: boolean
}