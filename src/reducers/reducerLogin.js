import { actionsTypes } from "../Actions/ConstActions"

const INITIAL_STATE = {
    user: "NO USERS"
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionsTypes.LOGIN:
            return {...state, user: "LOGIN"}
        break;
        case actionsTypes.LOGOUT:
            return {...state, user: "LOGOUT"}
        break;
        default:
            return state
    }
}

export { reducers };