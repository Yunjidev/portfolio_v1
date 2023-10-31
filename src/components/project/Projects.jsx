import './project.css';
import rustoffProject1 from "../../assets/img/skills-logo/rustoff-gif2.gif";
import svg1 from "../../assets/img/skills-logo/ruby-logo.svg";
import svg2 from "../../assets/img/skills-logo/tailwind-logo.svg";
import svg3 from "../../assets/img/skills-logo/postgresql-logo.svg"; 
import svg4 from "../../assets/img/skills-logo/javascript-logo.svg"; 
import svg5 from "../../assets/img/skills-logo/html-logo.svg"; 
import { useNightMode } from '../NightModeContext';


const Projects = () => {
  const { isNightMode } = useNightMode();

  return (
    <div id="projects" className={`conteneur-global ${isNightMode ? 'night-mode' : ''}`}>
      <div className="section-header">
        <h2>Mes Projets</h2>
        <p>Découvrez certains de mes projets récents.</p>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={rustoffProject1} alt="Projet 1" />
        </div>
        <div className="card-descriptif">
          <img
            src={svg1}
            alt="ruby svg"
            title="Ruby On Rails"
            className="svg-icon"
          />
          <img
            src={svg2}
            alt="tailwind svg"
            title="Tailwind CSS"
            className="svg-icon"
          />
          <img
            src={svg3}
            alt="postgresql svg"
            title="PostgreSQL"
            className="svg-icon"
          />
          <img
            src={svg4}
            alt="javascript svg"
            title="JavaScript"
            className="svg-icon"
          />
          <img
            src={svg5}
            alt="html css svg"
            title="HTML/CSS"
            className="svg-icon"
          />

          <h3>Rustoff</h3>
          <h2>Site Web Graphiste<hr /></h2>
          <p>Features :</p>
          <ul>
            <li>- Boutique en ligne (Stripe)</li>
            <li>- Devis</li>
            <li>- Panel Admin</li>
            <li>- Mailer</li>
            <li>- Compte Client</li>
            <li>- Portfolio ...</li>
          </ul>
          <div className="button">
            <a href="https://github.com/Yunjidev/portfolio_v1.git">
              <button>Code</button>
            </a>
            <a href="#">
              <button>Live</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
