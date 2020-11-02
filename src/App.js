import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './views/login'
import Register from './views/register'
import Category from './views/category'
import AddExpanse from './views/addExpanse'
import FilterExpanse from './views/filterExpanse'

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
          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/add-expanse">
            <AddExpanse />
          </Route>
          <Route exact path="/filter-expanse">
            <FilterExpanse />
          </Route>
        </Switch>
      </div>
    );
  }
}


