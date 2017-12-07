import {
  EDIT_USER,
  EDIT_USER_FULFILLED,
} from './reducer'

export const editUser = username => ({ type: EDIT_USER, payload: username })
export const editUserFufilled = payload => ({ type: EDIT_USER_FULFILLED, payload })
