import { FETCH_USERS, FETCH_USERS_FULFILLED } from './reducer'

export const fetchUser = username => ({ type: FETCH_USERS, payload: username })
export const fetchUserFulfilled = payload => ({ type: FETCH_USERS_FULFILLED, payload })
