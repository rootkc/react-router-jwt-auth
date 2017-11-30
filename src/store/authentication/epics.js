import { Observable } from 'rxjs'
import { FETCH_USERS } from './reducer'
import { fetchUserFulfilled } from './actions'

const authenticationEpic = action$ =>
  action$.ofType(FETCH_USERS)
    .mergeMap(() =>
      Observable.ajax.getJSON('/users')
        .map(response => fetchUserFulfilled(response)))

export default authenticationEpic
