import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { UserForm } from 'components'
import { editUser } from 'store/actions'

const EditUserFormContainer = props => <UserForm title="Edit" label="edit" {...props} />

const onSubmit = (data, dispatch) => dispatch(editUser(data))

const mapStateToProps = state => ({
  initialValues: { username: state.user.username },
})

const formEditUserFormContainer = reduxForm({
  form: 'EditUserForm',
  destroyOnUnmount: false,
  onSubmit,
})(EditUserFormContainer)

export default connect(mapStateToProps, null)(formEditUserFormContainer)
