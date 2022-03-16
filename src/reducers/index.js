import { combineReducers } from 'redux'

import { reducers as reducerLogin } from "./reducerLogin"
import { reducers as reducerPeople } from "./reducerPeople"
import { reducers as reducerGdriver } from "./reducerGdriver"
import { reducers as reducerTags } from "./reducerTags"
import { reducers as reducerProfile } from "./reducerProfile"

const reducers = combineReducers({
    reducerLogin,
    reducerPeople,
    reducerGdriver,
    reducerTags,
    reducerProfile
});

export { reducers }
