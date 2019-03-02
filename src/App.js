import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Nav, Options } from './components'
import { Home, About, Projects, Contact, NotFound } from './pages'

class App extends Component {
  state = {
    isEnglish: true,
    appHeight: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  handleResize = () => {
    this.setState({ appHeight: window.innerHeight })
  }

  updateLang = e => {
    const isEnglish = e.target.dataset.lang === 'english'

    this.setState({ isEnglish })
  }

  render() {
    const { isEnglish, appHeight } = this.state

    return (
      <BrowserRouter>
        <div className='wrapper' style={{ height: `${appHeight}px` }}>
          <Options updateLang={this.updateLang} isEnglish={isEnglish} />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Home isEnglish={isEnglish} />}
            />
            <Route
              path='/about'
              render={() => <About isEnglish={isEnglish} />}
            />
            <Route
              path='/projects/'
              render={() => <Projects isEnglish={isEnglish} />}
            />
            <Route
              path='/contact'
              render={() => <Contact isEnglish={isEnglish} />}
            />
            <Route component={NotFound} />
          </Switch>
          <Nav isEnglish={isEnglish} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
