import {
  CREATE_USER,
  CREATE_USER_FULFILLED,
  LOGIN_USER,
  LOGIN_USER_FULFILLED,
} from './reducer'

export const createUser = username => ({ type: CREATE_USER, payload: username })
export const createUserFufilled = payload => ({ type: CREATE_USER_FULFILLED, payload })

export const loginUser = username => ({ type: LOGIN_USER, payload: username })
export const loginUserFufilled = payload => ({ type: LOGIN_USER_FULFILLED, payload })
