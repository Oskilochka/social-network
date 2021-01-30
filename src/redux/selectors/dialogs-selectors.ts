import {AppStateType} from "../redux-store";

export const setDialogs = (state: AppStateType) => state.dialogsPage.dialogs
export const setMessages = (state: AppStateType) => state.dialogsPage.messages

