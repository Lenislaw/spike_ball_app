import React, { useState } from "react";
import YouTube from "react-youtube";
import Image from "../../img/spikeball-about.jpg";

const AboutSpike = () => {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };
  window.addEventListener("click", (e) => {
    clickOutSide(e);
  });
  const clickOutSide = (e) => {
    const modalById = document.getElementById("modal");

    if (e.target === modalById) {
      setModal(false);
    }
  };

  return (
    <div className="container">
      <div className="about">
        <h2>Learn Basics</h2>
        <div className="about-image">
          <img className="photo" src={Image} alt="spikeball gameplay" />
        </div>
        <div className="open-modal">
          Watch to learn basics!
          <button className="open-modal-btn" onClick={onClick}>
            Watch <i className="fas fa-play-circle"></i>
          </button>
        </div>
        {modal && (
          <div id="modal" className="modal">
            <div className="modal-content">
              <button
                className="modal-close-btn"
                onClick={() => setModal(false)}
              >
                &times;
              </button>
              <div className="box">
                Watch to learn more about Spike!
                <YouTube className="youtube" videoId="tc1pEqCGWnw" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSpike;
