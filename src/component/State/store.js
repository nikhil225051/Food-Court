import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authantication/Reducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
