import React from "react";

const skills = [
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "D3.js",
  "Pug",
  "React",
  "Redux",
  "node",
  "MongoDB",
  "Express",
  "Firebase",
  "Git",
  "Webpack",
  "Parcel",
  "npm",
  "Wordpress"
];

const About = props => (
  <main className="light">
    <section className="about grid__row">
      <div className="card grid__col--6">
        <h1>{props.isEnglish ? "About Me:" : "Sobre Mi:"} </h1>
        <p>
          {props.isEnglish
            ? "Hi, I'm Jimmy Guzman and I'm a Front End Developer. I'm currently based out of Minneapolis but I love traveling and experiencing new places, so i'll go where the job takes me. I'm well versed in various front-end skills and have a passion for building great user experiences with great functionality, which is demonstrated in my projects."
            : "Hola, soy Jimmy Guzman y soy un Desarrollador de Web Front-End. En este momento estoy basado en Minneapolis pero me gusta viajar y voy adonde el trabajo me lleva. Estoy versado en varias habilidades de front-end y me apasiona la construcción de excelentes experiencias de usuario con gran funcionalidad, lo que se demuestra en mis proyectos"}
        </p>
      </div>
      <div className="card grid__col--6">
        <h1>{props.isEnglish ? "Skills:" : "Habilidades:"}</h1>
        <ul>
          {skills.map((skill, index) => (
            <li className="badge" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
);

export default About;
