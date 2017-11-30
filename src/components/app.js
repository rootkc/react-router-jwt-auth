import React from 'react'
import { List, Link, HorizontalRule } from 'components'
import { Route } from 'react-router-dom'
import { CreateUserForm } from 'containers'

const App = () => (
  <div>
    <List>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/topics">Topics</Link>
    </List>
    <HorizontalRule />
    <Route exact path="/" component={CreateUserForm} />
    <Route path="/about" component={CreateUserForm} />
    <Route path="/topics" component={CreateUserForm} />
  </div>
)

export default App
