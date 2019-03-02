import React from 'react'
import { bool, shape, string, func } from 'prop-types'

import TechList from './TechList'
import { GithubSVG, DemoSVG } from './svgs'
import { ProgressBar, Indeterminate } from './styles/ProgressBar'

const Project = ({
  project: { repo, name, tech, description, spanish, url },
  isEnglish,
  onProjectImageLoaded,
  loadingProjectImage
}) => {
  const imgixUrl = `https://jimmy-guzman.imgix.net/project-screenshots/`
  const imgParams = `png?w=400?fm=png&auto=format`
  const imgUrl = `${imgixUrl + repo}.${imgParams}`

  return (
    <div className='project grid__row'>
      <div className='project__image card'>
        <div className='project__bar'>
          <span>{name}</span>
          <div className='project__links'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Demo'
            >
              <DemoSVG height='24' width='24' />
            </a>
            <a
              href={`https://github.com/jimmy-guzman/${repo}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Repo'
            >
              <GithubSVG height='24' width='24' />
            </a>
          </div>
        </div>
        <div>
          {loadingProjectImage && (
            <ProgressBar>
              <Indeterminate />
            </ProgressBar>
          )}
          <img
            style={{ ...(loadingProjectImage && { visibility: 'hidden' }) }}
            onLoad={onProjectImageLoaded}
            alt={name}
            srcSet={`${imgUrl} 1x,
        ${imgUrl}&fit=max&q=40&dpr=2 2x,
        ${imgUrl}&fit=max&q=20&dpr=3 3x`}
            src={imgUrl}
          />
        </div>
        <div className='project__info'>
          <TechList techs={tech} />
          <p className='project__desc'>{isEnglish ? description : spanish}</p>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  loadingProjectImage: bool.isRequired,
  onProjectImageLoaded: func.isRequired,
  isEnglish: bool.isRequired,
  project: shape({
    name: string,
    url: string,
    repo: string,
    description: string,
    spanish: string
  }).isRequired
}

export default Project
