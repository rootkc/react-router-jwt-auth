import React from 'react'
import PropTypes from 'prop-types'
import { List, Link, Heading } from 'components'

const UserList = ({ users }) => (
  <div>
    <Heading>Users</Heading>
    <List>
      {
        users.map(user => (
          <Link key={user.id} to={`/user/${user.id}`}> { user.username } </Link>
        ))
      }
    </List>
  </div>

)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserList
