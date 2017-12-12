import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';

import routes from './Routes';
import * as actions from '../../actions';

class App extends Component {
  renderRoutes() {
    return routes.map((route, i) => {
      return <Route key={`route_${i}`} {...route} />;
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Helmet
              title="Todo CRA"
              meta={[
                { property: 'og:title', content: 'Home' },
                {
                  property: 'og:description',
                  content: 'To Do CRA Applications'
                },
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:type', content: `game` },
                { property: 'og:site_name', content: 'TODO' },
                { property: 'og:url', content: `http://www.todo.io` },
                { property: 'og:image', content: `` },
                { name: 'twitter:card', content: 'Summary' },
                { name: 'twitter:site', content: '@OmniBytes' },
                { name: 'twitter:creator', content: '@OmniBytes' }
              ]}
            />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Switch>{this.renderRoutes()}</Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
