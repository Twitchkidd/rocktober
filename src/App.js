import React, { Component } from "react";
import { Spring, config } from "react-spring";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        waitedOnce: true
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        waitedTwice: true
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.waitedOnce ? (
            <Spring
              from={{ paddingLeft: "1000px", opacity: 0 }}
              to={{ paddingLeft: "0px", opacity: 1 }}
              config={config.slow}
            >
              {props => (
                <h1 className="App-title" style={props}>
                  Welcome to React
                </h1>
              )}
            </Spring>
          ) : null}
        </header>
        {this.state.waitedTwice ? (
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
        ) : null}
      </div>
    );
  }
}

export default App;
