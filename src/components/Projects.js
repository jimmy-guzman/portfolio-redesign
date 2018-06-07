import React, { Component } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

import Project from "./Project";
import ProjectList from "./ProjectList";

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
  updateIndex = index => {
    let projectIndex = this.state.projectIndex;
    projectIndex = index;
    this.setState({ projectIndex });
    this.toggleList();
  };

  render() {
    return (
      <main className="projects">
        <Project project={projects[this.state.projectIndex]} />
        <div className="projects__buttons">
          <button className="btn__primary" onClick={this.renderPrev}>
            <PrevSVG height={48} width={48} />
          </button>
          <button className="btn__primary" onClick={this.renderNext}>
            <NextSVG height={48} width={48} />
          </button>
        </div>
      </main>
    );
  }
}

export default Projects;
