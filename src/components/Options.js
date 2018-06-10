import React from "react";
import { NavLink } from "react-router-dom";
// import DaySVG from "./SVGs/DaySVG";
// import NightSVG from "./SVGs/NightSVG";

const Options = props => (
  <div className="options">
    {/* <div className="options__day-night">
      <button className="btn__primary" aria-label="Day Mode">
        <DaySVG height="24" width="24" />
      </button>
      <button className="btn__primary" aria-label="Night Mode">
        <NightSVG height="24" width="24" />
      </button>
    </div> */}
    <NavLink exact to={"/"}>
      Jimmy Guzman
    </NavLink>
    <div className="options__lang">
      <button
        className={!props.isEnglish ? "btn__primary active" : "btn__primary"}
        onClick={() => props.updateLang("spanish")}
      >
        SP
      </button>
      <button
        className={props.isEnglish ? "btn__primary active" : "btn__primary"}
        onClick={() => props.updateLang("english")}
      >
        ENG
      </button>
    </div>
  </div>
);

export default Options;
