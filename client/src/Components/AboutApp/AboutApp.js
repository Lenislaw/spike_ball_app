import React from "react";
import MongoDBLogo from "../../img/mongoDB-logo.png";

const AboutApp = () => {
  return (
    <div className="container">
      <div className="about-app">
        <h3>About Application</h3>
        <div className="version">
          <h4>Version v1.0.0</h4>
        </div>
        <div>
          Application created with passion for programming and playing
          spikeball. Presentation of:
          <ul className="list">
            <li className="list-item html">
              HTML5 <i className="fab fa-html5"></i>
            </li>
            <li className="list-item css">
              CSS3 <i className="fab fa-css3"></i>
            </li>
            <li className="list-item sass">
              SASS <i className="fab fa-sass"></i>
            </li>{" "}
            <li className="list-item js">
              JavaScript <i className="fab fa-js"></i>
            </li>
            <li className="list-item react">
              React.JS <i className="fab fa-react"></i>
            </li>
          </ul>
          skills in project. The main goal in this version was to create a score
          counter in line with the spike ball offical rules.
          <br />
          <div className="futures">
            <h4>Futures</h4>
            <p>
              Now I'm working on a login/logout system, creating a player
              profile, saving games in profile history based on technology
            </p>
            <ul className="list">
              <li className="list-item node">
                Node.JS <i className="fab fa-node-js"></i>
              </li>
              <li className="list-item js">Express.JS</li>
              <li className="list-item mongo">
                MongoDB
                <div className="mongo">
                  <img className="photo" src={MongoDBLogo} alt="mongoDB Logo" />
                </div>
              </li>
            </ul>
            <p>UPDATE SOON!</p>
          </div>
          This App is created by{" "}
          <a
            className="creator"
            href="https://github.com/Lenislaw"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lenislaw <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
