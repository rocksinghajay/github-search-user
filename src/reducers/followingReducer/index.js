import * as types from '../../actions/types.js';
const initState = {
    following: {}
}
export function followingReducer(state = initState,action) {
    switch(action.type){
        case types.FOLLOWING:
            return Object.assign({}, state, { following: action.payload});
            break;
        	default: 
            return state
    }
} 



