/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import './AboutMe.css';
import myImage from '../../assets/img/about.png';


function AboutMe() {
  return (
    <section id= "about" className="about-me">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={myImage} alt="Votre photo" className="about-img" />
          </Col>
          <Col xs={12} md={6}>
            <div className="about-info">
              <h2>A propos de moi</h2>
              <p>
                Passionné par le spatial, la technologie et l'informatique, je suis un développeur web motivé et dynamique. Formateur au chez The Hacking Project, je forme les accompagne les élèves dans leur cursus et leurs projets. Prêt à partager mon univers avec vous.
              </p>
              <ul className="about-list">
              <li>
                  <FaUser style={{ color: '#D268CC', fontSize: '1.5em' }} /> Florian van Camp
                </li>
                <li>
                  <IoMdMail style={{ color: '#D268CC', fontSize: '1.5em' }} /> florian.vancamp@gmail.com
                </li>
                <li>
                  <FaMapMarkerAlt style={{ color: '#D268CC', fontSize: '1.5em' }} /> France, Nord
                </li>
              </ul>
              <a href="/cv.pdf" download target="_blank" className="btn-download">
                Télécharger mon CV
              </a>
            </div>
          </Col>
          <hr />
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
