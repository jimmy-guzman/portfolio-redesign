import React from "react";

import GithubSVG from "./SVGs/GithubSVG";
import DemoSVG from "./SVGs/DemoSVG";

const Project = ({ project, isEnglish }) => (
  <div className="project">
    <div className="project__image card">
      <img
        src={require(`../img/${project.repo}.png`)}
        alt={`Image of project ${project.name}`}
      />
      <div className="project__overlay">
        <p className="project__desc">
          {isEnglish ? project.description : project.spanish}
        </p>
      </div>
      <div className="project__name">
        <span>{project.name}</span>
      </div>
      <div className="project__links">
        <a
          className="btn__primary"
          href={project.url}
          target="_blank"
          rel="noopener"
          aria-label="View Demo"
        >
          View Demo
        </a>
        <a
          className="btn__primary"
          href={`https://github.com/jimmy-guzman/${project.repo}`}
          target="_blank"
          rel="noopener"
          aria-label="View Repo"
        >
          View Code
        </a>
      </div>
      <ul className="project__tech">
        {project.tech.map((tech, index) => <li key={index}>{tech}</li>)}
      </ul>
    </div>
  </div>
);

export default Project;
