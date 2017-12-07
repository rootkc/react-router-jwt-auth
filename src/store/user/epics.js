import { api } from 'services'
import { FETCH_USER } from './reducer'
import { fetchUserFulfilled } from './actions'

const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      api(`/users/${action.payload}`)
        .map(request => fetchUserFulfilled(request.response.data)))

export default fetchUserEpic
