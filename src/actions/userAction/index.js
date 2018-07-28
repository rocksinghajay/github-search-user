import axios from 'axios'
import { HAS_ERROR,USER} from '../types'
export const userAction = username => {
return dispatch => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(res => {
      dispatch({
        type: USER,
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
