import { Observable } from 'rxjs'
import { api } from 'services'
import { CREATE_USER } from './reducer'
import { createUserFufilled, createUserError } from './actions'

const createUserEpic = action$ =>
  action$.ofType(CREATE_USER)
    .mergeMap(action =>
      api('/users', 'POST', { user: action.payload })
        .map(request => createUserFufilled(request.response.data))
        .catch(error => Observable.of(createUserError(error.response))))

export default createUserEpic
