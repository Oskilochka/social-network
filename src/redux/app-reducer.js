import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';
/*
type InitialStateType = typeof initialState;*/

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action/*: ActionsType*/) => {
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

/*type SetAuthUserData = {
    type: typeof SET_USER_DATA,
    data: {
        id: number,
        email: string,
        login: string
    }
}*/

export const setInitializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess());

    })}


export default appReducer;