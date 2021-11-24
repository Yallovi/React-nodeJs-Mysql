import { authApi } from "../api/api";

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defaultState = {
    currentUser: {},
    isAuth: false,
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
            // localStorage.removeItem('token');
            return {
                ...state, 
                currentUser: {},
                isAuth: false,
            };
        default:
            return state;
    }
}

export const setUser = user => ({type: SET_USER, payload: user});
export const logout = () => ({type: LOGOUT});

export const login = (email, password) => async (dispatch) => {
    let response = await authApi.login(email, password);
        if( response.status === 200){
            const user = response.values.user;
            dispatch(setUser(user));
        }
};
export const signup = (name, last_name, email, password) => async(dispatch) =>{
    let response = await authApi.registration(name, last_name, email, password)
     if(response.status === 302) {
        console.log(response.values.message);
    }
};