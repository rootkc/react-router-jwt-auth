import React from 'react'
import { Route } from 'react-router-dom'
import { List, Link, HorizontalRule, Heading } from 'components'
import { SignupUserForm, LoginUserForm, EditUserForm, Users, User } from 'containers'

const App = () => (
  <div>
    <List>
      <Link key="route1" to="/">Home</Link>
      <Link key="route2" to="/users">Users</Link>
      <Link key="route3" to="/login">Login</Link>
      <Link key="route4" to="/signup">Signup</Link>
    </List>
    <HorizontalRule />
    <Route exact path="/" render={() => <Heading>Welcome!</Heading>} />
    <Route exact path="/users" component={Users} />
    <Route path="/user/:id" component={User} />
    <Route path="/edit/:id" component={EditUserForm} />
    <Route path="/login" component={LoginUserForm} />
    <Route path="/signup" component={SignupUserForm} />
  </div>
)

export default App
