import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {userlistReducer} from './userlistReducer'
import {userReducer} from './userReducer'
import {followersReducer} from './followersReducer'
import {reposReducer} from './reposReducer'
import {followingReducer} from './followingReducer' 
export default combineReducers({
userlistReducer: userlistReducer,
userReducer:userReducer,
followersReducer:followersReducer,
reposReducer:reposReducer,
followingReducer:followingReducer,
router: routerReducer,

});