import React from "react";

import GithubSVG from "./SVGs/GithubSVG";
import EmailSVG from "./SVGs/EmailSVG";

const Contact = ({ isEnglish }) => (
  <main className="light">
    <section className="contact grid__row">
      <div className="card grid__col--6">
        {isEnglish ? (
          <p>
            If you're interested in chatting, want more information about what
            I've been working on, or inquire about freelance work. <br />
            I'd love to hear from you!
          </p>
        ) : (
          <p>
            Si estás interesado en chatear, quieres más información sobre lo que
            he estado trabajando, o preguntar sobre el trabajo independiente.{" "}
            <br />
            Me encantaría saber de usted!
          </p>
        )}

        <ul>
          <li>
            <a href="mailto:hello@jimmyguzman.com">
              <EmailSVG width="50" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jimmy-guzman"
              target="_blank"
              rel="noopener"
            >
              <GithubSVG width="50" height="50" />
            </a>
          </li>
        </ul>
        <p>
          <a href="mailto:hello@jimmyguzman.com">hello@jimmyguzman.com</a>
        </p>
      </div>
    </section>
  </main>
);

export default Contact;
