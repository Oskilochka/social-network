import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./app-reducer";
import {profileReducer} from "./profile-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

type RootReducer = typeof rootReducer // (globalState: GLOBAlSTATE) => GLOBAlSTATE
export type AppStateType = ReturnType<RootReducer>

type ActionValueType<T> = T extends {[key: string]: infer U}  ? U : never

export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<ActionValueType<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

//@ts-ignore
window.store = store;



export default store;



