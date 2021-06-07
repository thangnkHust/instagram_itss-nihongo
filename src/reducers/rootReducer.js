import { combineReducers, createStore } from "redux";
import {auth as authReducer} from '../reducers/auth'

const rootReducer = combineReducers({
    authReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
