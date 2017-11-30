import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    { children }
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Form
