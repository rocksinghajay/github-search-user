import axios from 'axios'
import { HAS_ERROR,FOLLOWERS} from '../types'
export const followersAction = username => {
return dispatch => {
  return axios
    .get(`https://api.github.com/users/${username}/followers`)
    .then(res => {
      dispatch({
       type: FOLLOWERS,
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


