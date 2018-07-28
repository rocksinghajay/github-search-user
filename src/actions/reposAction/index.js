import axios from 'axios'
import { HAS_ERROR,REPOS} from '../types'
export const reposAction = username => {
return dispatch => {
  return axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(res => {
      dispatch({
        type: REPOS,
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


