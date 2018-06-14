import React from "react";

import GithubSVG from "./SVGs/GithubSVG";
import DemoSVG from "./SVGs/DemoSVG";

const Project = ({ project, isEnglish }) => (
  <div className="project grid__row">
    <div className="project__image card">
      <div className="project__bar">
        <span>{project.name}</span>
        <div className="project__links">
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            aria-label="View Demo"
          >
            <DemoSVG height={24} width={24} />
          </a>
          <a
            href={`https://github.com/jimmy-guzman/${project.repo}`}
            target="_blank"
            rel="noopener"
            aria-label="View Repo"
          >
            <GithubSVG height={24} width={24} />
          </a>
        </div>
      </div>
      <img
        src={require(`../img/${project.repo}.png`)}
        alt={`Image of project ${project.name}`}
      />
      <div className="project__info">
        <ul className="project__tech">
          {project.tech.map((tech, index) => (
            <li className="badge" key={index}>
              {tech}
            </li>
          ))}
        </ul>
        <p className="project__desc">
          {isEnglish ? project.description : project.spanish}
        </p>
      </div>
    </div>
  </div>
);

export default Project;
