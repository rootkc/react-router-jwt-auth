import React from 'react'
import { reduxForm } from 'redux-form'
import { UserForm } from 'components'
import { loginUser } from 'store/actions'

const LoginUserFormContainer = props => <UserForm title="Login" label="login" {...props} />

const onSubmit = (data, dispatch) => dispatch(loginUser(data))

export default reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  onSubmit,
})(LoginUserFormContainer)
