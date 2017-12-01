import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const List = ({
  users,
  id,
  match,
  fetchUsers,
}) => {
  const user = users.find(userElem => `${userElem.id}` === match.params.id)
  if (!user) {
    fetchUsers()
    return null
  }
  return (
    <div>
      <p> { user.username } </p>
      { `${user.id}` === id && <Link to={`/edit/${user.id}`}>edit</Link> }
    </div>
  )
}

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  fetchUsers: PropTypes.func.isRequired,
}

export default List
