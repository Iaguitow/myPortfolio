import { actionsTypes } from "../Actions/ConstActions"

const INITIAL_STATE = {
    people: {}
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionsTypes.GET_PEOPLE:
            return {...state, people: "JOHN"}
        break;
        case actionsTypes.REGISTER_PEOPLE:
            return {...state, people: "JOHN"}
        break;
        default:
            return state
    }
}

export { reducers };