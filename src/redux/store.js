import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello everyone', likesCount: '12'},
                {id: 2, message: 'Goodbye everyone', likesCount: '24'},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('hello')
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;  //наблюдатель
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    }
}



export default store;