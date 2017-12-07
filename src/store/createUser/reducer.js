export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_FULFILLED = 'CREATE_USER_FULFILLED'

const createUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_FULFILLED:
      return {
        ...state,
        message: `user ${action.payload.username} successfully created`,
      }

    default:
      return state
  }
}

export default createUserReducer
