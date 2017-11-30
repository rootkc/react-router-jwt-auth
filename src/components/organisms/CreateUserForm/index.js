import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Button, Heading } from 'components'

const CreateUserForm = ({ handleSubmit }) => (
  <div>
    <Heading>Create User</Heading>
    <Form onSubmit={handleSubmit}>
      <Field name="username" label="username" />
      <Field name="password" label="password" type="password" />
      <Button label="create user" />
    </Form>
  </div>

)

CreateUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default CreateUserForm
