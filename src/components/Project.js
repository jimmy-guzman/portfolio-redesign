import React from "react";
import PropTypes from "prop-types";

import TechList from "./TechList";
import GithubSVG from "./SVGs/GithubSVG";
import DemoSVG from "./SVGs/DemoSVG";

const Project = ({ project, isEnglish }) => {
  const imgixUrl = `https://jimmy-guzman.imgix.net/project-screenshots/`;
  const imgParams = `png?w=400?fm=png&auto=format`;
  const imgUrl = `${imgixUrl}${project.repo}.${imgParams}`;

  return (
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
          srcSet={`${imgUrl} 1x,
        ${imgUrl}&fit=max&q=40&dpr=2 2x,
        ${imgUrl}&fit=max&q=20&dpr=3 3x`}
          src={`${imgUrl}`}
        />
        <div className="project__info">
          <TechList techs={project.tech} />
          <p className="project__desc">
            {isEnglish ? project.description : project.spanish}
          </p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired
};

export default Project;
