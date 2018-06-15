import React from "react";
import PropTypes from "prop-types";

const TechList = ({ techs }) => (
  <ul style={{ textAlign: "center" }}>
    {techs.map((tech, index) => (
      <li className="badge" key={index}>
        {tech}
      </li>
    ))}
  </ul>
);

TechList.propTypes = {
  techs: PropTypes.array.isRequired
};

export default TechList;
