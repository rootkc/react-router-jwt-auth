export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'

const initState = {}

const fetchUserReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return action.payload

    default:
      return state
  }
}

export default fetchUserReducer
