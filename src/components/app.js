import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from 'store/actions'

const App = ({ fetchUserProps }) => (
  <div> {'Hi Auth!'}
    <button onClick={() => fetchUserProps('redux-observable')} />
  </div>

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
