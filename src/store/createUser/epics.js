import { api } from 'services'
import { CREATE_USER } from './reducer'
import { createUserFufilled } from './actions'

const createUserEpic = action$ =>
  action$.ofType(CREATE_USER)
    .mergeMap(action =>
      api('/users', 'POST', { user: action.payload })
        .map(request => createUserFufilled(request.response.data)))

export default createUserEpic
