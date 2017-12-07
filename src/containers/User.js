import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { User } from 'components'
import { fetchUser } from 'store/actions'

class UserListContainer extends Component {
  componentWillMount() {
    const { match } = this.props
    this.props.fetchUser(match.params.id)
  }

  render() {
    return <User {...this.props} />
  }
}

UserListContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
  id: state.login.id,
})

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
