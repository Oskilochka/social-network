import {InferActionsType} from "./redux-store";

type InitialStateType = typeof initialState

type MessageType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    name: string
}

let initialState = {
    messages:  [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Goodbye'},
        {id: 3, message: 'Have a nice day!'}
    ] as  Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Julia'},
        {id: 2, name: 'Vadim'},
        {id: 3, name: 'Sasha'}
    ] as Array<DialogType>,
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SEND_MESSAGE":
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body }]
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions> ;

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: "SEND_MESSAGE", newMessageBody})
};


export default dialogsReducer;