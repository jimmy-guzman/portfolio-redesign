import React from 'react'
import { bool } from 'prop-types'
import { summary, summarySpanish, skills } from '../data/about.json'

import { TechList } from '../components'

const About = ({ isEnglish }) => (
  <main className='light'>
    <section className='about grid__row'>
      <div className='card grid__col--6'>
        <h1>{`${isEnglish ? 'About Me' : 'Sobre Mi'}:`}</h1>
        <p>{isEnglish ? summary : summarySpanish}</p>
      </div>
      <div className='card grid__col--6'>
        <h1>{`${isEnglish ? 'Skills' : 'Habilidades'}:`}</h1>
        <TechList techs={skills} />
      </div>
    </section>
  </main>
)

About.propTypes = {
  isEnglish: bool.isRequired
}

export default About
