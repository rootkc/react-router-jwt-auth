import { api, localStorage } from 'services'
import { LOGIN_USER } from './reducer'
import { loginUserFufilled } from './actions'

const loginUserEpic = action$ =>
  action$.ofType(LOGIN_USER)
    .mergeMap(action =>
      api('/login', 'POST', { user: action.payload })
        .do(request => localStorage.saveState(request.response.data.token))
        .map(request => loginUserFufilled(request.response.data.token)))

export default loginUserEpic
