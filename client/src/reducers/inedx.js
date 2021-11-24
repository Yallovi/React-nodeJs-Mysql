import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';



const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer,
    authReducer: authReducer,
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
window.store = store;