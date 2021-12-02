import { authApi } from "../api/api";
import { stopSubmit} from "redux-form";

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const defaultState = {
    currentUser: {},
    isAuth: false,
    successMessage: null,
    isFetching: false,
};

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            };
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state, 
                currentUser: {},
                isAuth: false,
            };
        case SUCCESS_MESSAGE:
            return {
                ...state, 
                successMessage: action.payload,
            }; 
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            };
        default:
            return state;
    }
}

export const setUser = user => ({type: SET_USER, payload: user});
export const logout = () => ({type: LOGOUT});
export const successSignup = successMessage => ({type: SUCCESS_MESSAGE, payload: successMessage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching})

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch(toggleIsFetching(true))
        let response = await authApi.login(email, password);
        if( response.data.status === 200){
            const user = response.data.values.user;
            dispatch(toggleIsFetching(false));
            dispatch(setUser(user));
        } 
    } catch (e) {    
            // console.log(e?.response.data);
            dispatch(stopSubmit("login", {_error: e?.response.data.values.message})); 
    }
    
};
export const signup = (name, last_name, email, password) => async(dispatch) =>{
    dispatch(toggleIsFetching(true))
    try{
        let response = await authApi.registration(name, last_name, email, password)
            if( response.data.status === 200){
                dispatch(toggleIsFetching(false));
                console.log(response.data.values.message);
                const successMessage = response.data.values.message;
                dispatch(successSignup(successMessage));
            }
    }catch(e){
        // console.log(e?.response.data.values.message);
        dispatch(stopSubmit("registration", {_error: e.response.data.values.message}));
    };

};