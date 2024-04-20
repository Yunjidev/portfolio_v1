/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import './Navbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logoanim.gif';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';
import dl from '../../assets/img/download.svg';



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="md"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleLinkClick('home')}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleLinkClick('skills')}
            >
              À Propos
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleLinkClick('skills')}
            >
              Compétences
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleLinkClick('projects')}
            >
              Projets
            </Nav.Link>

            <Nav.Link href="/cv.pdf" download className="navbar-link">
              CV
              <img src={dl} alt="Télécharger" className="download-icon" />
            </Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/florian-van-camp-102aba262/" title="LinkedIn">
                <img src={navIcon1} alt="linkedin link" />
              </a>
              <a href="mailto:yunji.webdev@gmail.com" title="Contact">
                <img src={navIcon2} alt="mail link" />
              </a>
              <a href="https://www.malt.fr/profile/florianvancamp" title="Malt">
                <img src={navIcon4} alt="malt link" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
