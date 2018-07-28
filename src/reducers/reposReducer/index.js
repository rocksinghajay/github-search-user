import * as types from '../../actions/types.js';
const initState = {
    repos: {}
}
export function reposReducer(state = initState,action) {
    switch(action.type){
        case types.REPOS:
            return Object.assign({}, state, { repos: action.payload});
            break;
        	default: 
            return state
    }
} 




