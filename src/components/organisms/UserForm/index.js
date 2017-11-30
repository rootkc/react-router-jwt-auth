import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Button, Heading } from 'components'

const CreateUserForm = ({ handleSubmit, title, label }) => (
  <div>
    <Heading> { title } </Heading>
    <Form onSubmit={handleSubmit}>
      <Field name="username" label="username" />
      <Field name="password" label="password" type="password" />
      <Button label={label} />
    </Form>
  </div>
)

CreateUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default CreateUserForm
