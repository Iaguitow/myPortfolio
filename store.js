import { createStore, applyMiddleware } from "redux";
import { default as ReduxThunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import { reducers } from "./src/reducers";

const middlewares = applyMiddleware(ReduxThunk,logger);

const store = createStore(reducers, middlewares);

export { store };