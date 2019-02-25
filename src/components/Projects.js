import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { projects } from '../data/projects.json'
import Project from './Project'
import ProjectButtons from './ProjectButtons'

class Projects extends Component {
  state = {
    projectIndex: 0
  }

  renderNext = () => {
    let { projectIndex } = this.state
    if (projectIndex === projects.length - 1) {
      projectIndex = 0
    } else {
      projectIndex += 1
    }

    this.setState({ projectIndex })
  }

  renderPrev = () => {
    let { projectIndex } = this.state
    if (projectIndex === 0) {
      projectIndex = projects.length - 1
    } else {
      projectIndex += 1
    }

    this.setState({ projectIndex })
  }

  render() {
    const { projectIndex } = this.state
    const { isEnglish } = this.props

    return (
      <main className='light'>
        <section className='projects grid__row'>
          <Project project={projects[projectIndex]} isEnglish={isEnglish} />
          <ProjectButtons
            renderNext={this.renderNext}
            renderPrev={this.renderPrev}
          />
        </section>
      </main>
    )
  }
}

Projects.propTypes = {
  isEnglish: PropTypes.bool.isRequired
}

export default Projects
