import React, { Component } from 'react';
// import React from 'react';
import logo from './logo.svg';
import Break from './screens/break/break';
import On from './screens/on/on';
import Off from './screens/off/off';
import Test from './Test';

import './App.css';

class App extends Component {
// class App extends React.Component

  constructor(props) {
    super(props);
    this.state = {
      currentState: "https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg"
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({
      currentState: e,
    })
  }

  render() {
    const { currentState, naam } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BULB ASSIGNMENT</h1>
        </header>
        <div className="container">
        <Test/>
          <img className="container" src={currentState} alt="bulb" /></div>
        <h1>{naam}</h1>
        <div className="btncontainer">
          <Break updateState={this.updateState} />
          <On updateState={this.updateState} />
          <Off updateState={this.updateState} />

        </div>
      </div>
    );
  }
}

export default App;
