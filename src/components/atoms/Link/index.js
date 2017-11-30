import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkElem = ({ to, children }) => (
  <Link to={to}> { children } </Link>
)

LinkElem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default LinkElem
