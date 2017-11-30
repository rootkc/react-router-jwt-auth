import {
  LOGIN_USER,
  LOGIN_USER_FULFILLED,
} from './reducer'

export const loginUser = username => ({ type: LOGIN_USER, payload: username })
export const loginUserFufilled = payload => ({ type: LOGIN_USER_FULFILLED, payload })
