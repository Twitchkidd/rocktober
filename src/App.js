import React, { Component } from "react";
import { Spring, config } from "react-spring";
import logo from "./spinach.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Spring
            from={{ paddingLeft: "1000px", opacity: 0 }}
            to={{ paddingLeft: "0px", opacity: 1 }}
            config={config.slow}
          >
            {props => (
              <h1 className="App-title" style={props}>
                Welcome to Rocktober
              </h1>
            )}
          </Spring>
        </header>
        <Spring
          from={{ paddingLeft: "1000px", opacity: 0 }}
          to={{ paddingLeft: "0px", opacity: 1 }}
          config={config.slow}
          delay={1000}
        >
          {props => (
            <p className="App-intro" style={props}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          )}
        </Spring>
      </div>
    );
  }
}

export default App;
