import { Observable } from 'rxjs'
import { FETCH_USERS } from './reducer'
import { fetchUsersFulfilled } from './actions'

const fetchUsersEpic = action$ =>
  action$.ofType(FETCH_USERS)
    .mergeMap(() =>
      Observable.ajax.getJSON('/users')
        .map(response => fetchUsersFulfilled(response)))

export default fetchUsersEpic
