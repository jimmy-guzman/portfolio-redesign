import React from "react";

import GithubSVG from "./SVGs/GithubSVG";
import DemoSVG from "./SVGs/DemoSVG";

const Project = ({ project, isEnglish }) => (
  <section className="project">
    <div className="project__image">
      <img
        src={require(`../img/${project.repo}.png`)}
        alt={`Image of project ${project.name}`}
      />
    </div>
    <h1 className="project__name">{project.name}</h1>
    <p className="project__desc">
      {isEnglish ? project.description : project.spanish}
    </p>
    <ul className="project__tech">
      {project.tech.map((tech, index) => <li key={index}>{tech}</li>)}
    </ul>
    <div className="project__links">
      <a
        href={project.url}
        target="_blank"
        rel="noopener"
        aria-label="View Demo"
      >
        <DemoSVG height={40} width={40} />
      </a>
      <a
        href={`https://github.com/jimmy-guzman/${project.repo}`}
        target="_blank"
        rel="noopener"
        aria-label="View Repo"
      >
        <GithubSVG height={40} width={40} />
      </a>
    </div>
  </section>
);

export default Project;
