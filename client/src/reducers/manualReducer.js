const SET_MANUAL = 'SET_MANUAL';

const defaultState = {
    itemTitle: null,
    theory: null,


};

export default function manualReducer(state = defaultState, action) {
    // debugger;
  switch (action.type) {
    case SET_MANUAL:
        return{
            ...state,
            ...action.payload
        }
    default:
        return state
  }
}

export const setManual = (itemTitle, theory) => ({type: SET_MANUAL, payload: {itemTitle, theory}})
