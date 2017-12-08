import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, disabled }) => (
  <button disabled={disabled} type="submit">
    { label }
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Button
