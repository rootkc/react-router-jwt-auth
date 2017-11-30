export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        token: action.payload,
      }

    default:
      return state
  }
}

export default loginUserReducer
