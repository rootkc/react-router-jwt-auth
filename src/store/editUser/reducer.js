export const EDIT_USER = 'EDIT_USER'
export const EDIT_USER_FULFILLED = 'EDIT_USER_FULFILLED'

const edituserReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_USER_FULFILLED:
      return {
        ...state,
        user: action.payload,
        message: `user ${action.payload.username} successfully edited`,
      }

    default:
      return state
  }
}

export default edituserReducer
