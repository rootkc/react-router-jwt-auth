import { api, localStorage } from 'services'
import { Observable } from 'rxjs'
import { push } from 'react-router-redux'
import { LOGIN_USER } from './reducer'
import { loginUserFufilled } from './actions'

const loginUserEpic = action$ =>
  action$.ofType(LOGIN_USER)
    .mergeMap(action =>
      api('/login', 'POST', { user: action.payload })
        .do(({ response: { data: { token, id } } }) => localStorage.saveState(token, id))
        .flatMap(({ response: { data: { token, id } } }) =>
          Observable.concat(
            Observable.of(loginUserFufilled({ token, id })),
            Observable.of(push('/users')),
          )))

export default loginUserEpic
