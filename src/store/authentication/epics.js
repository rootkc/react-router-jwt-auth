import { Observable } from 'rxjs'
import { FETCH_USER } from './reducer'
import { fetchUserFulfilled } from './actions'

const authenticationEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      Observable.ajax.getJSON('/users')
        .do(response => console.log(response))
        .map(response => fetchUserFulfilled(response)))

export default authenticationEpic
