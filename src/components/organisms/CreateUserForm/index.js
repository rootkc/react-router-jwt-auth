import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Button } from 'components'

const CreateUserForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field name="username" label="username" />
    <Field name="password" label="password" type="password" />
    <Button label="create user" />
  </Form>
)

CreateUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default CreateUserForm
