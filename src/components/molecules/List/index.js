import React from 'react'
import PropTypes from 'prop-types'

const List = ({ children }) => (
  <ul>
    {children.map(child => (
      <li key={child.key}>
        { child }
      </li>
    ))}
  </ul>

)

List.propTypes = {
  children: PropTypes.array.isRequired,
}

export default List
