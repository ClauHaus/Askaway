import React, { useState, useEffect } from "react";
import titleImg from "./images/title.png";
import useSound from "use-sound";
import startup from "./sounds/startup.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faMailBulk,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./context";

const Intro = () => {
  const { time, restartGame, intro, title, nextPageIntro } = useGlobalContext();
  const [start, setStart] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [play] = useSound(startup, { volume: 0.5 });

  const startGame = () => {
    play();
    setStart(true);
    setOpacity(0);
    let timeOut = setTimeout(() => {
      nextPageIntro(intro, title);
    }, 5500); //PASARLO A 5500!
    return () => clearTimeout(timeOut);
  };

  return (
    <>
      <section className="container-back">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\Desktop</div>
            </section>
            <section className="upper-icons">
              <div className="icons-data">
                <FontAwesomeIcon icon={faWindowMinimize}></FontAwesomeIcon>
              </div>
              <div className="icons-data">
                <FontAwesomeIcon icon={faWindowMaximize}></FontAwesomeIcon>
              </div>
              <div className="icons-data">
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </div>
            </section>
          </div>
        </header>
        <div className="container-intro">
          <button
            onClick={() => startGame()}
            style={{
              color: "#fff",
              background: "#000",
              marginTop: "5px",
              opacity: `${opacity}`,
            }}
          >
            &gt;Run
          </button>
          {start && (
            <ul>
              <li className="noShow">
                ClauHaus App [Version 12.0.18032.1144] © ClauHaus Corporation.
                All rights reserved.
              </li>
              <li className="noShow1">C:\Desktop\Checking...</li>
              <li className="noShow1">C:\Desktop\Opening\Askaway</li>
              <li className="noShow2">&gt;Decompresing questions</li>
              <li className="noShow2">&gt;Randoming answers</li>
              <li className="noShow3">&gt;Installing difficulty variables</li>
              <li className="noShow3">&gt;Unpacking Hell Mod%1Psfö7$*luI</li>
              <li className="noShow4">.</li>
              <li className="noShow4">..</li>
              <li className="noShow4">...</li>
              <li className="noShow5">C:\Desktop\Askaway\Execute</li>
              <li className="noShow5">&gt;Execute</li>
            </ul>
          )}
        </div>
      </section>
      <section>
        <footer className="container-bottom">
          <div>
            <button className="btn-restart" onClick={restartGame}>
              <FontAwesomeIcon icon={faWindows}></FontAwesomeIcon>
              ReStart
            </button>
          </div>
          <FontAwesomeIcon
            icon={faGripLinesVertical}
            className="container-bottom-icons-span"
          ></FontAwesomeIcon>
          <a
            href="https://github.com/ClauHaus/AskAway"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="container-bottom-icons"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/claudio-aime-2a91a034/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="container-bottom-icons"
            />
          </a>
          <a
            href="https://twitter.com/ClauHaus_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="container-bottom-icons"
              style={{ color: "black" }}
            />
          </a>
          <a
            href="mailto:claudio.aime32@gmail.com?subject=Regarding%20Askaway"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faMailBulk}
              className="container-bottom-icons"
            />
          </a>
          <FontAwesomeIcon
            icon={faGripLinesVertical}
            className="container-bottom-icons-span"
          ></FontAwesomeIcon>
          <div className="container-bottom-image" style={{ opacity: "0" }}>
            <img
              className="container-bottom-icons-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
          </div>
          <div className="container-bottom-clock">{time}</div>
        </footer>
      </section>
    </>
  );
};

export default Intro;
