import { api } from 'services'
import { combineEpics } from 'redux-observable'
import { CREATE_USER, LOGIN_USER } from './reducer'
import { createUserFufilled, loginUserFufilled } from './actions'

const createUserEpic = action$ =>
  action$.ofType(CREATE_USER)
    .mergeMap(action =>
      api('/users', 'POST', { user: action.payload })
        .map(request => createUserFufilled(request.response.data)))

const loginUserEpic = action$ =>
  action$.ofType(LOGIN_USER)
    .mergeMap(action =>
      api('/login', 'POST', { user: action.payload })
        .map(request => loginUserFufilled(request.response.data.token)))

export default combineEpics(createUserEpic, loginUserEpic)
