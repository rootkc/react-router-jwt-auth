import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Button, Heading } from 'components'

const CreateUserForm = ({
  handleSubmit,
  submitting,
  title,
  label,
  message,
  errorMessage,
}) => (
  <div>
    <Heading> { title } </Heading>
    <Form onSubmit={handleSubmit}>
      <Field name="username" label="username" />
      <Field name="password" label="password" type="password" />
      <Button disabled={submitting} label={label} />
    </Form>
    { errorMessage && <p>{ errorMessage }</p> }
    { message && <p>{ message }</p> }
  </div>
)

CreateUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  errorMessage: PropTypes.string,
}

CreateUserForm.defaultProps = {
  message: null,
  errorMessage: null,
}

export default CreateUserForm
