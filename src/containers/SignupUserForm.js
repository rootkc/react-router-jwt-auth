import React from 'react'
import { reduxForm } from 'redux-form'
import { UserForm } from 'components'
import { fetchUser } from 'store/actions'

const SignUpUserFormContainer = props => <UserForm title="Signup" label="signup" {...props} />

const onSubmit = (data, dispatch) => dispatch(fetchUser('posts'))

export default reduxForm({
  form: 'SignupUserForm',
  destroyOnUnmount: false,
  onSubmit,
})(SignUpUserFormContainer)
