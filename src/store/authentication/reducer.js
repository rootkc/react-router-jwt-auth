export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_FULFILLED = 'CREATE_USER_FULFILLED'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_FULFILLED:
      return {
        ...state,
        user: action.payload,
      }

    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        token: action.payload,
      }

    default:
      return state
  }
}

export default authenticationReducer
