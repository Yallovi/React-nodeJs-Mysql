const UPPDATE_REQ_TEXT = 'UPPDATE_REQ_TEXT';

const defaultState = {
    ReqText: '',
};

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case UPPDATE_REQ_TEXT: 
            return {...state, ReqText: action.newText};
        default:
            return state;
    }
};

// actionCreator 

export const uppdateReqText = (newText) => ({type: UPPDATE_REQ_TEXT, newText});
