import axios from 'axios'
import { HAS_ERROR,FOLLOWING} from '../types'
export const followingAction = username => {
return dispatch => {
  return axios
    .get(`https://api.github.com/users/${username}/following`)
    .then(res => {
      dispatch({
       type: FOLLOWING,
        payload: res.data
      })
      return res.data
    })
    .catch(function(error) {
      dispatch({
        type: HAS_ERROR,
        data: error,
      })
      return error
    })
}
}


