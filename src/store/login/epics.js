import { api, localStorage } from 'services'
import { LOGIN_USER } from './reducer'
import { loginUserFufilled } from './actions'

const loginUserEpic = action$ =>
  action$.ofType(LOGIN_USER)
    .mergeMap(action =>
      api('/login', 'POST', { user: action.payload })
        .do(({ response: { data: { token, id } } }) => localStorage.saveState(token, id))
        .map(({ response: { data: { token, id } } }) => loginUserFufilled({ token, id })))

export default loginUserEpic
