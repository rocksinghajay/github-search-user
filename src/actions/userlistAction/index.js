import axios from 'axios'
import { HAS_ERROR,USER_LIST} from '../types'
export const userlistAction = username => {
return dispatch => {
  return axios
    .get(`https://api.github.com/search/users?q=${username}`)
    .then(res => {
      dispatch({
        type: USER_LIST,
        payload: res.data.items
      })
      return res.data.items
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
