import React from "react";

import GithubSVG from "./SVGs/GithubSVG";
import DemoSVG from "./SVGs/DemoSVG";

const Project = props => (
  <section className="project">
    <div className="project__image">
      <img src={require(`../img/${props.project.repo}.png`)} />
    </div>
    <h1 className="project__name">{props.project.name}</h1>
    <p className="project__desc">{props.project.description}</p>
    <ul className="project__tech">
      {props.project.tech.map((tech, index) => <li key={index}>{tech}</li>)}
    </ul>
    <div className="project__links">
      <a href={props.project.url} target="_blank">
        <DemoSVG height={40} width={40} />
      </a>
      <a
        href={`https://github.com/jimmy-guzman/${props.project.repo}`}
        target="_blank"
      >
        <GithubSVG height={40} width={40} />
      </a>
    </div>
  </section>
);

export default Project;
