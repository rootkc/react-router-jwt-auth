import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from 'store/actions'

import { Field, Button } from 'components'
import { CreateUser } from 'containers'


const App = ({ fetchUserProps }) => (
  <CreateUser onSubmit={fetchUserProps}>
    <Field name="username" label="username" />
    <Field name="password" label="password" type="password" />
    <Button> {'Create user'} </Button>
  </CreateUser>
)

App.propTypes = {
  fetchUserProps: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  state,
})

const mapDispatchToProps = dispatch => ({
  fetchUserProps: name => dispatch(fetchUser(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
