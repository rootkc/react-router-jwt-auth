import React from 'react'
import PropTypes from 'prop-types'

const List = ({ children }) => (
  <ul>
    {children.map(child => (
      <li>
        { child }
      </li>
    ))}
  </ul>

)

List.propTypes = {
  children: PropTypes.string.isRequired,
}

export default List
