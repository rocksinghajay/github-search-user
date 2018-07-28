
import * as types from '../../actions/types.js';
const initState ={
	userList:[],
}

export function userlistReducer(state = initState, action) {
	switch(action.type) {
		case types.USER_LIST:
		return Object.assign({}, state, { userList: action.payload});
		break;
		default:
		return state;
    }
}
