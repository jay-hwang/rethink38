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

    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
