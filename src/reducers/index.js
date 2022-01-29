import { combineReducers } from 'redux'

import { reducers as reducerLogin } from "./reducerLogin"
import { reducers as reducerPeople } from "./reducerPeople"

const reducers = combineReducers({
    reducerLogin,
    reducerPeople
});

export { reducers }
