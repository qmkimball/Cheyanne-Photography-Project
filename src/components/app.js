import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Gallery from './pages/gallery';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>

              <Route path="/gallery" component={Gallery} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
