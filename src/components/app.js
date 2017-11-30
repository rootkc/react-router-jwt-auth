import React from 'react'
import { List, Link, HorizontalRule } from 'components'
import { Route } from 'react-router-dom'
import { CreateUserForm, UserList } from 'containers'

const App = () => (
  <div>
    <List>
      <Link key="route1" to="/">Home</Link>
      <Link key="route2" to="/users">Users</Link>
      <Link key="route3" to="/signup">Signup</Link>
    </List>
    <HorizontalRule />
    <Route exact path="/" render={() => <h3>Welcome!</h3>} />
    <Route exact path="/users" component={UserList} />
    <Route path="/users/:id" component={CreateUserForm} />
    <Route path="/signup" component={CreateUserForm} />
  </div>
)

export default App
