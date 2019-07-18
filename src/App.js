import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage'
import AuthorsPage from './pages/AuthorsPage'
import UserViewsPage from './pages/UserViewsPage'
import EndpointsPage from './pages/EndpointsPage'

import Links from './Links';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/user_views" component={UserViewsPage} />
        <Route path="/endpoints" component={EndpointsPage} />
      </Switch>
    );
  }
}

export default App;
