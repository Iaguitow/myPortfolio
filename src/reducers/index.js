import { combineReducers } from 'redux'

import { reducers as reducerLogin } from "./reducerLogin"
import { reducers as reducerPeople } from "./reducerPeople"
import { reducers as reducerGdriver } from "./reducerGdriver"

const reducers = combineReducers({
    reducerLogin,
    reducerPeople,
    reducerGdriver
});

export { reducers }
