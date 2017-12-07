import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Users } from 'components'
import { fetchUsers } from 'store/actions'

class UserListContainer extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    return <Users {...this.props} />
  }
}

UserListContainer.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
