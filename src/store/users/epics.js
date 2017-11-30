import { api } from 'services'
import { FETCH_USERS } from './reducer'
import { fetchUsersFulfilled } from './actions'

const fetchUsersEpic = action$ =>
  action$.ofType(FETCH_USERS)
    .mergeMap(() =>
      api('/users')
        .map(request => fetchUsersFulfilled(request.response.data)))

export default fetchUsersEpic
