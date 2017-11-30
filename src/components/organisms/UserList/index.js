import React from 'react'
import PropTypes from 'prop-types'
import { List, Link, Heading } from 'components'

const UserList = ({ userList }) => (
  <div>
    <Heading>Users</Heading>
    <List>
      {
        userList.map(user => (
          <Link key={user.id} to={`/users/${user.id}`}> { user.username } </Link>
        ))
      }
    </List>
  </div>

)

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserList
