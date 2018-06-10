import React from "react";

import NextSVG from "./SVGs/NextSVG";
import PrevSVG from "./SVGs/PrevSVG";

const ProjectButtons = props => (
  <div className="projects__buttons">
    <button
      className="btn__secondary"
      onClick={props.renderPrev}
      aria-label="Previous"
    >
      <PrevSVG height={48} width={48} />
    </button>
    <button
      className="btn__secondary"
      onClick={props.renderNext}
      aria-label="Next"
    >
      <NextSVG height={48} width={48} />
    </button>
  </div>
);

export default ProjectButtons;
