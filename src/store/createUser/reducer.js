export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_FULFILLED = 'CREATE_USER_FULFILLED'
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR'

const createUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_FULFILLED:
      return {
        ...state,
        message: `user ${action.payload.username} successfully created`,
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        error: `${action.payload.errors.username[0]}`,
      }
    default:
      return state
  }
}

export default createUserReducer
