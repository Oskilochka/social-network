import {getAuthUserData} from "./auth-reducer";
import {InferActionsType} from "./redux-store";

export type InitialStateType = typeof initialState

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
//actions
type ActionsType = InferActionsType<typeof actions>;

export const actions = {
    setInitializedSuccess: () => ({type: "SET_INITIALIZED_SUCCESS"})
}

//ThunkCreator
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(actions.setInitializedSuccess());
    })
}

