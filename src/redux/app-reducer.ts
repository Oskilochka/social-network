import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
//ActionCreator
export const setInitializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED_SUCCESS});

export type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS
}

type ActionsType = InitializedSuccessActionType;

//ThunkCreator
export const initializeApp = () =>  (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess());

    })
}

export default appReducer;