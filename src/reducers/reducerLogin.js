import { actionsTypes } from "../Actions/ConstActions"
import { actionsTypesAPI } from "../Actions/ConstActionsApi"

const INITIAL_STATE = {
    payload:"",
    loading: false,
    api_status: actionsTypesAPI.STATUS_IDLE,
    login_attempts: 0
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionsTypes.LOGIN:
            return {...state, payload:action.payload, loading: true, api_status: actionsTypesAPI.STATUS_OK , login_attempts: state.login_attempts+1}
        break;
        case actionsTypes.LOGIN_ERROR:
            return {...state, payload:action.payload, loading: false, api_status: actionsTypesAPI.STATUS_ERRO, login_attempts: state.login_attempts+1}
        break;
        case actionsTypes.LOGIN_NOT_FOUND:
            return {...state, payload:action.payload, loading: false, api_status: actionsTypesAPI.STATUS_USER_NOT_FOUND, login_attempts: state.login_attempts+1}
        break;
        case actionsTypes.LOGOUT:
            return {...state, payload: state.payload, loading: true, api_status: state.api_status}
        break;
        default:
            return state
    }
}

export { reducers };