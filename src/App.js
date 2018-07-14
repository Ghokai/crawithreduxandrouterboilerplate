import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";

let x;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcomzaaa e to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save theloohelloooo
          reload.
        </p>
        <Main />
      </div>
    );
  }
}

export default App;
