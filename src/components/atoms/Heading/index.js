import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ children }) => (
  <h3 type="submit">
    { children }
  </h3>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading
