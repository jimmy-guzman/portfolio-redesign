import React from "react";

const Home = props => (
  <div className="title">
    <h1 className="title__name">Jimmy Guzman</h1>
    <h2 className="title__caption">
      {props.isEnglish
        ? "Front End Web Developer"
        : "Desarrollador de Web Front End"}
    </h2>
  </div>
);

export default Home;
