const SEND_MESSAGE = 'SEND-MESSAGE';
type initialStateType = typeof initialState

let initialState = {
    messages:  [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Goodbye'},
        {id: 3, message: 'Have a nice day!'}
    ],
    dialogs: [
        {id: 1, name: 'Julia'},
        {id: 2, name: 'Vadim'},
        {id: 3, name: 'Sasha'}
    ],
}

const dialogsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body }]
            }
        default:
            return state;
    }
}
type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string;
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody});

type ActionsType = SendMessageCreatorType ;

export default dialogsReducer;