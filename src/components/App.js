import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Options from "./Options";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import ProjectsList from "./ProjectList";
import Contact from "./Contact";

class App extends Component {
  state = {
    isEnglish: true,
    nightMode: true
  };
  updateLang = newLanguage => {
    let isEnglish = newLanguage !== "english" ? false : true;
    this.setState({ isEnglish });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Options
            updateLang={this.updateLang}
            isEnglish={this.state.isEnglish}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home isEnglish={this.state.isEnglish} />}
            />
            <Route
              path="/about"
              render={() => <About isEnglish={this.state.isEnglish} />}
            />
            <Route path="/projects/" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route
              render={() => (
                <h2>404 Error: URL does not match any existing paths!</h2>
              )}
            />
          </Switch>
          <Nav isEnglish={this.state.isEnglish} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
