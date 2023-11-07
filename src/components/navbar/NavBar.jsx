import { useState, useEffect } from "react";
import './Navbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/astro-logo1.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import navIcon4 from '../../assets/img/moon.svg';
import navIcon5 from '../../assets/img/sun.svg';
import dl from '../../assets/img/download.svg';


import { useNightMode } from '../NightModeContext';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { isNightMode, toggleNightMode } = useNightMode();

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
      className={`${scrolled ? 'scrolled' : ''} ${isNightMode ? 'night-mode' : ''}`}
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

            <Nav.Link onClick={toggleNightMode} className="theme-toggle-button">
              {isNightMode ? <img src={navIcon4} alt="Lune" /> : <img src={navIcon5} alt="Soleil" />}
            </Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/florian-van-camp-102aba262/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="mailto:florian.vancamp@gmail.com">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/Yunjidev">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
