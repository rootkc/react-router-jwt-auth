export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED'

const initState = {
  users: [],
}

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_FULFILLED:
      return {
        ...state,
        users: action.payload.data,
      }

    default:
      return state
  }
}

export default authenticationReducer
