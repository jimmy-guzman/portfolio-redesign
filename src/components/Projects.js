import React, { Component } from "react";
import projects from "../data/projects";

import Project from "./Project";
import ProjectButtons from "./ProjectButtons";

class Projects extends Component {
  state = {
    projectIndex: 0,
    showList: false
  };
  renderNext = () => {
    let projectIndex = this.state.projectIndex;
    if (projectIndex === projects.length - 1) {
      projectIndex = 0;
    } else {
      projectIndex++;
    }

    this.setState({ projectIndex });
  };
  renderPrev = () => {
    let projectIndex = this.state.projectIndex;
    if (projectIndex === 0) {
      projectIndex = projects.length - 1;
    } else {
      projectIndex--;
    }

    this.setState({ projectIndex });
  };

  render() {
    return (
      <main className="light">
        <section className="projects grid__row">
          <Project
            project={projects[this.state.projectIndex]}
            isEnglish={this.props.isEnglish}
          />
          <ProjectButtons
            renderNext={this.renderNext}
            renderPrev={this.renderPrev}
          />
        </section>
      </main>
    );
  }
}

export default Projects;
