import React from 'react'
import { reduxForm } from 'redux-form'
import { CreateUserForm } from 'components'
import { fetchUser } from 'store/actions'

const CreateUserFormContainer = props => <CreateUserForm {...props} />

const onSubmit = (data, dispatch) => dispatch(fetchUser('posts'))

export default reduxForm({
  form: 'CreateUserForm',
  destroyOnUnmount: false,
  onSubmit,
})(CreateUserFormContainer)
