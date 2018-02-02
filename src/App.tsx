import * as React from 'react';
import './App.css';
import Persons from './Persons';
import Counter from './Counter';
import store from './store';

const initial = store.getState();

const logo = require('./logo.svg');

export default class App extends React.Component {
  input: HTMLInputElement;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Persons />
        <Counter />
        <p>{JSON.stringify(initial)}</p>
      </div>
    );
  }
}
