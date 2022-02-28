import { actionsTypes } from "../Actions/ConstActions"
import { actionsTypesAPI } from "../Actions/ConstActionsApi"

const INITIAL_STATE = {
    payload:{img: null, FileTypeName: null, cancelled: false},
    api_status: actionsTypesAPI.STATUS_IDLE,
    api_requests: 0
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.UPDATE_FILES:
            return {...state, payload:action.payload, api_status: actionsTypesAPI.STATUS_OK, api_requests:state.api_requests+1}
        break;
        case actionsTypes.UPDATE_FILES_ERROR:
            return {...state, payload:action.payload, api_status: actionsTypesAPI.STATUS_ERRO, api_requests:state.api_requests+1}
        break;
        case actionsTypes.GET_FILES:
            return {...state, payload:action.payload, api_status: actionsTypesAPI.STATUS_OK, api_requests:state.api_requests+1}
        break;
        case actionsTypes.GET_FILES_ERROR:
            return {...state, payload:action.payload, api_status: actionsTypesAPI.STATUS_ERRO, api_requests:state.api_requests+1}
        break;    
        default:
            return state;
    }
        
}

export { reducers }