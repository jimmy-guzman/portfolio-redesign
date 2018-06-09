import React from "react";

const Home = props => (
  <div className="title">
    <h1 className="title__name">
      {props.isEnglish ? "Hi, I'm Jimmy" : "Hola, Soy Jimmy"}
    </h1>
    <h2 className="title__caption">
      {props.isEnglish ? "I'm a Web Developer" : "Soy un Desarrollador de Web"}
    </h2>
  </div>
);

export default Home;
