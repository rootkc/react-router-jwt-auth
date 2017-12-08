import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Button, Heading } from 'components'

const CreateUserForm = ({
  handleSubmit,
  submitting,
  title,
  label,
  message,
  error,
}) => (
  <div>
    <Heading> { title } </Heading>
    <Form onSubmit={handleSubmit}>
      <Field name="username" label="username" />
      <Field name="password" label="password" type="password" />
      <Button disabled={submitting} label={label} />
    </Form>
    <p>{ message && message }</p>
    <p>{ error && error }</p>
  </div>
)

CreateUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  error: PropTypes.string,
}

CreateUserForm.defaultProps = {
  message: null,
  error: null,
}

export default CreateUserForm
