import React from 'react'
import { bool } from 'prop-types'

import { english, spanish } from '../data/contact.json'

import { GithubSVG, EmailSVG, LinkedinSVG } from '../components/svgs'

const EMAIL = 'hello@jimmyguzman.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jimmy-guzman-87bb2714a/'
const GITHUB_URL = 'https://github.com/jimmy-guzman'

const Contact = ({ isEnglish }) => (
  <main className='light'>
    <section className='contact grid__row'>
      <div className='card grid__col--6'>
        <p>{isEnglish ? english : spanish}</p>
        <ul>
          <li>
            <a href={`mailto:${EMAIL}`}>
              <EmailSVG width='50' height='50' />
            </a>
          </li>
          <li>
            <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
              <LinkedinSVG width='50' height='50' />
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <GithubSVG width='50' height='50' />
            </a>
          </li>
        </ul>
        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  </main>
)

Contact.propTypes = {
  isEnglish: bool.isRequired
}

export default Contact
