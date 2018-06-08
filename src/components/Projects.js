import React, { Component } from "react";
import projects from "../data/projects";

import Project from "./Project";

import NextSVG from "./SVGs/NextSVG";
import PrevSVG from "./SVGs/PrevSVG";

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
      <main className="projects">
        <Project
          project={projects[this.state.projectIndex]}
          isEnglish={this.props.isEnglish}
        />
        <div className="projects__buttons">
          <button
            className="btn__primary"
            onClick={this.renderPrev}
            aria-label="Previous"
          >
            <PrevSVG height={48} width={48} />
          </button>
          <button
            className="btn__primary"
            onClick={this.renderNext}
            aria-label="Next"
          >
            <NextSVG height={48} width={48} />
          </button>
        </div>
      </main>
    );
  }
}

export default Projects;
