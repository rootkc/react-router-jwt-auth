export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED'

const initState = []

const fetchUsersReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
      return action.payload

    default:
      return state
  }
}

export default fetchUsersReducer
