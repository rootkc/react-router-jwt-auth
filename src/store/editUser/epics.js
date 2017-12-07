import { api } from 'services'
import { EDIT_USER } from './reducer'
import { editUserFufilled } from './actions'

const editUserEpic = (action$, store) =>
  action$.ofType(EDIT_USER)
    .mergeMap(action =>
      api(`/users/${store.getState().login.id}`, 'PUT', { user: action.payload }, store.getState().login.token)
        .map(request => editUserFufilled(request.response.data)))

export default editUserEpic
