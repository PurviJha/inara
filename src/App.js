import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './views/login'
import Register from './views/register'
import Home from './views/home'


export default class App extends Component {
  render() {
    return (
      <div>
         <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
        
      </div>
    )
  }
}
