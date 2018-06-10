import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => (
  <nav className="main-nav">
    <NavLink to="/about">{props.isEnglish ? "About" : "Sobre Mi"}</NavLink>
    <NavLink to="/projects">
      {props.isEnglish ? "Projects" : "Proyectos"}
    </NavLink>
    <NavLink to="/contact">{props.isEnglish ? "Contact" : "Contacto"}</NavLink>
  </nav>
);

export default Nav;
