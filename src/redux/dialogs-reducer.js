const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Goodbye'},
        {id: 3, message: 'Have a nice day!'}
    ],
    newMessageBody: '',
    dialogs: [
        {id: 1, name: 'Julia'},
        {id: 2, name: 'Vadim'},
        {id: 3, name: 'Sasha'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
        switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                break;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody = '';
                state.messages.push({id: 6, message: body});
                break;
            default: return state;
        }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewBodyMessageCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;