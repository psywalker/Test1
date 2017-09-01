import React, { Component } from 'react';
import './App.css';

import Container from './components/Container';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sum: 3,
      sumTest: 1
    };
  }



  render() {

    return (
      <div className="App">
        <Container sum={this.state.sum} sumTest={this.state.sumTest} />
      </div>
    );
  }
}

export default App;
