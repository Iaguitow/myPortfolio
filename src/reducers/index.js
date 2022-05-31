import { combineReducers } from 'redux'

import { reducers as reducerLogin } from "./reducerLogin";
import { reducers as reducerPeople } from "./reducerPeople";
import { reducers as reducerGdriver } from "./reducerGdriver";
import { reducers as reducerTags } from "./reducerTags";
import { reducers as reducerProfile } from "./reducerProfile";
import { reducers as reducerCities } from "./reducerCities";

const reducers = combineReducers({
    reducerLogin,
    reducerPeople,
    reducerGdriver,
    reducerTags,
    reducerProfile,
    reducerCities
});

export { reducers }
