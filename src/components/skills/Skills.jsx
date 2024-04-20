import { Col, Row } from "react-bootstrap";
import './Skills.css'; 

import {
  DiJavascript1,
  DiReact,
  DiRuby,
  DiHtml5,
  DiTerminal,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiPostgresql,
  SiGithub,
  SiTrello,
  SiStrapi,
} from "react-icons/si";
import { 
  TbBrandFigma,
  TbBrandVscode,
} from "react-icons/tb";

export const Skills = () => {
  return (
    <>
      <h2 className="project-heading">
        Mes Compétences
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <span className="tech-icon-description">Tailwind CSS</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <span className="tech-icon-description">JavaScript</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandFigma />
          <span className="tech-icon-description">Figma</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
          <span className="tech-icon-description">Bootstrap</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <span className="tech-icon-description">React</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiRuby />
          <span className="tech-icon-description">Ruby</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
          <span className="tech-icon-description">HTML5</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
          <span className="tech-icon-description">PostgreSQL</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <span className="tech-icon-description">TypeScript</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
          <span className="tech-icon-description">GitHub</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandVscode />
          <span className="tech-icon-description">Visual Studio Code</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTrello />
          <span className="tech-icon-description">Trello</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiStrapi />
          <span className="tech-icon-description">Strapi</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiTerminal />
          <span className="tech-icon-description">Terminal</span>
        </Col>
      </Row>
    </>
  );
}

export default Skills;
