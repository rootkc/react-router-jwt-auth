import { Observable } from 'rxjs'
import { FETCH_USER } from './reducer'
import { fetchUserFulfilled } from './actions'

const authenticationEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(() =>
      Observable.ajax.getJSON('/users')
        .map(response => fetchUserFulfilled(response)))

export default authenticationEpic
