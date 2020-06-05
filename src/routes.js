
import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from './components/Landing'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

export default (
  <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path="/register" component={Register}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/profile" component={Profile}/>
  </Switch>
)