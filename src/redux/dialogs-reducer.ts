const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

/*type MessageType = {
    id: number
    message: string
}

type Dialog = {
    id: number
    name: string
}


type InitialStateType = {
    messages: Array<MessageType>
    newMessageBody: string
    dialogs: Array<Dialog>
}*/

type InitialStateType = typeof initialState;

let initialState = {
    messages:  [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Goodbye'},
        {id: 3, message: 'Have a nice day!'}
    ],
    newMessageBody: '',
    dialogs: [
        {id: 1, name: 'Julia'},
        {id: 2, name: 'Vadim'},
        {id: 3, name: 'Sasha'}
    ],
}

const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: state.newMessageBody}]
            }
        default:
            return state;
    }
}
type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
}
export const sendMessageCreator = (): SendMessageCreatorType => ({type: SEND_MESSAGE});
type UpdateNewBodyMessageCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    body: string
}
export const updateNewBodyMessageCreator = (body: string): UpdateNewBodyMessageCreatorType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

type ActionsType = SendMessageCreatorType | UpdateNewBodyMessageCreatorType;

export default dialogsReducer;