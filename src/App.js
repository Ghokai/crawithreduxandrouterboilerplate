import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
