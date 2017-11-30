import React from 'react'
import { reduxForm } from 'redux-form'
import { UserForm } from 'components'
import { createUser } from 'store/actions'

const SignUpUserFormContainer = props => <UserForm title="Signup" label="signup" {...props} />

const onSubmit = (data, dispatch) => dispatch(createUser(data))

export default reduxForm({
  form: 'SignupUserForm',
  destroyOnUnmount: false,
  onSubmit,
})(SignUpUserFormContainer)
