import 'normalize.css'
import './scss/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import WebFont from 'webfontloader'
import App from './components/App'

WebFont.load({
  google: {
    families: ['Oswald:400,700']
  }
})

const theme = {
  primary: '#292b2f',
  secondary: '#40af93',
  tertiary: '#018185'
}

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
