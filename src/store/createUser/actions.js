import {
  CREATE_USER,
  CREATE_USER_FULFILLED,
} from './reducer'

export const createUser = username => ({ type: CREATE_USER, payload: username })
export const createUserFufilled = payload => ({ type: CREATE_USER_FULFILLED, payload })
