import React from 'react'
import { bool } from 'prop-types'

const EN_TITLE = "Hi, I'm Jimmy"
const SP_TITLE = 'Hola, Soy Jimmy'
const EN_CAPTION = "I'm a Web Developer"
const SP_CAPTION = 'Soy un Desarrollador de Web'

const Home = ({ isEnglish }) => (
  <div className='title'>
    <h1 className='title__name'>{isEnglish ? EN_TITLE : SP_TITLE}</h1>
    <h2 className='title__caption'>{isEnglish ? EN_CAPTION : SP_CAPTION}</h2>
  </div>
)

Home.propTypes = {
  isEnglish: bool.isRequired
}

export default Home
