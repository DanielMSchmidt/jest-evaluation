import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HoverAccordion from './components/HoverAccordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my Jest example</h2>
        </div>
        <HoverAccordion headlines={['Foo', 'Bar', 'Baz']} content={['Foo Content', 'Bar content', 'Baz content']} />
      </div>
    );
  }
}

export default App;
