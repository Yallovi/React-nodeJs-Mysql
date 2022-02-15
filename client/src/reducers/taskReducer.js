import { reqApi } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_TASK = 'SET_TASK';
const SET_VALUES = 'SET_VALUES';
const SET_SUCCESS = 'SET_SUCCESS';

const defaultState = {
    request: null,
    id: null,
    title: null, 
    values: [],
    messageSuccess: '',
};

export default function taskReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TASK:
            localStorage.setItem( "id", JSON.stringify(action.payload.id));
            localStorage.setItem( "title", JSON.stringify(action.payload.title));

            return{
                ...state,
                ...action.payload
                    
            }
        case SET_VALUES: 
            return {
                ...state,
                values: action.values
            }
        case SET_SUCCESS:
            return {
                ...state,
                messageSuccess: action.messageSuccess
            }
        default:
            return state
    }
};

export const setTask = (id, title) => ({type: SET_TASK, payload: {id, title}});
export const setValues = (values) => ({type: SET_VALUES, values});
export const responseSuccess = (messageSuccess) => ({type: SET_SUCCESS, messageSuccess})



export const sendRequest = (task) => async (dispatch) => {
    let response = await reqApi(task);
        if(response.status === 200 ){
            if(Array.isArray(response.data.values)){
                dispatch(setValues(response.data.values));
            } else{
                const messageSuccess = 'Успешно';
                dispatch(responseSuccess(messageSuccess))
                console.log(response);
            }
        }
        else {
            console.log(response);
            dispatch(stopSubmit("taskForm", {_error: response.data.values.sqlMessage}))
        }
}