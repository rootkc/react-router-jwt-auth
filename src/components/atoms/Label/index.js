import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ name, children }) => (
  <label htmlFor={name}>
    { children }
  </label>
)

Label.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Label
