import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({ user, id }) => (
  <div>
    <p> { user.username } </p>
    { `${user.id}` === id && <Link to={`/edit/${user.id}`}>edit</Link> }
  </div>
)

User.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }).isRequired,
}

export default User
