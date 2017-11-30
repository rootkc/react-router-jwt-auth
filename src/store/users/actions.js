import { FETCH_USERS, FETCH_USERS_FULFILLED } from './reducer'

export const fetchUsers = username => ({ type: FETCH_USERS, payload: username })
export const fetchUsersFulfilled = payload => ({ type: FETCH_USERS_FULFILLED, payload })
