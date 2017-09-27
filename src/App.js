import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Switch, withRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// Components
import Splash from './splash/Splash';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={createBrowserHistory()}>
          <div id="App">
            <Switch>
              <Route exact path='/' component={Splash}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
