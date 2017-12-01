import { api, localStorage } from 'services'
import { LOGIN_USER } from './reducer'
import { loginUserFufilled } from './actions'

const loginUserEpic = action$ =>
  action$.ofType(LOGIN_USER)
    .mergeMap(action =>
      api('/login', 'POST', { user: action.payload })
        .do(({ response: { data } }) => localStorage.saveState(data.token, data.id))
        .map(({ response: { data } }) => loginUserFufilled({
          token: data.token,
          id: data.id,
        })))

export default loginUserEpic
