import * as types from '../../actions/types.js';
const initState = {
    user: {}
}
export function userReducer(state = initState,action) {
    switch(action.type){
        case types.USER:
            return Object.assign({}, state, { user: action.payload});
            break;
        	default: 
            return state
    }
} 




