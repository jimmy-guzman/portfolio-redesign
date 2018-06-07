import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectList = props => (
  <main>
    <section className="projects">
      <table>
        <tr>
          <th>Project Name</th>
          <th>Tech Used</th>
        </tr>
        {projects.map((project, index) => (
          <tr key={index} onClick={() => props.updateIndex(index)}>
            <td>{project.name}</td>
            <td>{project.tech.map(tech => `${tech} `)}</td>
          </tr>
        ))}
      </table>
    </section>
  </main>
);

export default ProjectList;
