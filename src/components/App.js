import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Options from "./Options";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
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
    const { isEnglish } = this.state;
    return (
      <BrowserRouter>
        <div className="wrapper" style={{ height: `${window.innerHeight}px` }}>
          <Options updateLang={this.updateLang} isEnglish={isEnglish} />
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home isEnglish={isEnglish} />}
              />
              <Route
                path="/about"
                render={() => <About isEnglish={isEnglish} />}
              />
              <Route
                path="/projects/"
                render={() => <Projects isEnglish={isEnglish} />}
              />
              <Route
                path="/contact"
                render={() => <Contact isEnglish={isEnglish} />}
              />
              <Route
                render={() => (
                  <h2>404 Error: URL does not match any existing paths!</h2>
                )}
              />
            </Switch>
          </main>
          <Nav isEnglish={isEnglish} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
