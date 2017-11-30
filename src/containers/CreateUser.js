import React from 'react'
import { reduxForm } from 'redux-form'
import { Form } from 'components'

const CreateUserFormContainer = props => <Form {...props} />

export default reduxForm({
  form: 'CreateUserForm',
  destroyOnUnmount: false,
})(CreateUserFormContainer)
