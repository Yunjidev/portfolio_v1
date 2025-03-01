/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import './Banner.css';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/astrobanner.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Développeur web", "FullStack"];
  const period = 2000;


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenue sur mon Portfolio</span>
                  <h1 className="gradient-text">Je suis Florian,</h1>
                  <h2 className="gradient-text">Développeur web</h2>
                  <h2 className="gradient-text">Front et Back End</h2>
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/florian-van-camp-102aba262/" title="Linkedin">
                      <img src={navIcon1} alt="link linkedin" />
                    </a>
                    <a href="mailto:florian.vancamp@gmail.com" title="Contact">
                      <img src={navIcon2} alt="link mail" />
                    </a>
                    <a href="https://github.com/Yunjidev" title="Github">
                      <img src={navIcon3} alt="link github" />
                    </a>
                    <a href="https://www.malt.fr/profile/florianvancamp" title="Malt">
                      <img src={navIcon4} alt="link profil malt" />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
