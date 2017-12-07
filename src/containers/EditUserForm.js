import React from 'react'
import { reduxForm } from 'redux-form'
import { UserForm } from 'components'
import { editUser } from 'store/actions'

const EditUserFormContainer = props => <UserForm title="Edit" label="edit" {...props} />

const onSubmit = (data, dispatch) => dispatch(editUser(data))

export default reduxForm({
  form: 'EditUserForm',
  destroyOnUnmount: false,
  onSubmit,
})(EditUserFormContainer)
