import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserList } from 'components'
import { fetchUser } from 'store/actions'

class UserListContainer extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    return <UserList {...this.props} />
  }
}

UserListContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  userList: state.authentication.users,
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
