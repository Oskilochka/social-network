import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
/*
type InitialStateType = typeof initialState;*/

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action/*: ActionsType*/) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

export const setAuthUserData = (id/*: number*/, email/*: string*/, login/*: string*/)/*: SetAuthUserData*/ => (
    {type: SET_USER_DATA, data: {id, email, login}}
);

export const getAuthUserData = () => (dispatch) => {
    authAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email,login} = response.data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    });
}
/*
type ActionsType = SetAuthUserData;*/

export default authReducer;