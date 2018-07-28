import * as types from '../../actions/types.js';
const initState = {
    followers: {}
}
export function followersReducer(state = initState,action) {
    switch(action.type){
        case types.FOLLOWERS:
            return Object.assign({}, state, { followers: action.payload});
            break;
        	default: 
            return state
    }
} 




