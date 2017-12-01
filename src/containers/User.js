import React from 'react'
import { connect } from 'react-redux'
import { User } from 'components'
import { fetchUsers } from 'store/actions'

const UserContainer = props => <User {...props} />

const mapStateToProps = state => ({
  users: state.users,
  id: state.login.id,
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
