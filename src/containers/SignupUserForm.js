import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { UserForm } from 'components'
import { createUser } from 'store/actions'

const SignUpUserFormContainer = props => <UserForm title="Signup" label="signup" {...props} />

const onSubmit = (data, dispatch) => dispatch(createUser(data))

const mapStateToProps = state => ({
  message: state.createUser.message,
  errorMessage: state.createUser.error,
})

const formSignUpFormContainer = reduxForm({
  form: 'SignupForm',
  destroyOnUnmount: false,
  onSubmit,
})(SignUpUserFormContainer)

export default connect(mapStateToProps, null)(formSignUpFormContainer)
