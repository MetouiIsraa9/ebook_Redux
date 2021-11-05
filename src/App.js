import logo from './logo.svg';

import React, { Component } from 'react';

import Navbar from './components/Nav'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreateBook2 from './containers/CreateBook2';
import ViewBook from './containers/ViewBook'
import Home from './components/Home'
import Login from './containers/Login';
import ListBooks from './containers/ListBooks';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: '',
    };
  }


  notifyPathname(pathname) {
    this.setState({
      pathname: pathname,
    });
  }


  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
          <Switch>
            <Route
              path="/books"
              exact
              component={() => <Home/>}
            />
            <Route
              path="/createBook"
              exact
              component={() => <CreateBook2 />}
            />
            <Route
              path="/edit/:bookId"
              exact
              component={(props) => <CreateBook2 {...props} />} 
            />

            <Route
              path="/view/:bookId"
              exact
              component={(props) => <ViewBook {...props} />} 
            />
            <Route
              path="/login"
              exact
              component={(props) => <Login/>} 
            />
           <Route
              path="/"
              exact
              component={() => <ListBooks/>} 
            />

          </Switch>
        </div>
      </Router>

    )
  };
}


