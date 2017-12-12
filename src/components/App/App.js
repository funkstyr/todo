import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          title="Todo CRA"
          meta={[
            { property: 'og:title', content: 'Home' },
            { property: 'og:description', content: 'To Do CRA Applications' },
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
      </div>
    );
  }
}

export default App;
