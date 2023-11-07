import { useNightMode } from '../NightModeContext'; // Importe le hook useNightMode
import figmaLogo from "../../assets/img/skills-logo/figma-logo.svg";
import tailwindLogo from "../../assets/img/skills-logo/tailwind-logo.svg";
import boostrapLogo from "../../assets/img/skills-logo/bootstrap-logo.svg";
import reactLogo from "../../assets/img/skills-logo/react-logo.svg";
import rubyLogo from "../../assets/img/skills-logo/ruby-logo.svg";
import htmlLogo from "../../assets/img/skills-logo/html-logo.svg";
import postgresqlLogo from "../../assets/img/skills-logo/postgresql-logo.svg";
import javascriptLogo from "../../assets/img/skills-logo/javascript-logo.svg";
import gitLogo from "../../assets/img/skills-logo/github-logo.svg";
import vscodeLogo from "../../assets/img/skills-logo/vscode-logo.svg";
import trelloLogo from "../../assets/img/skills-logo/trello-logo.svg";
import './Skills.css'; 

export const Skills = () => {
  const { isNightMode } = useNightMode(); // Utilise le hook pour obtenir l'état du mode nuit

  const skillsData = {
    Design: [
      { name: 'Figma', logo: figmaLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'Bootstrap', logo: boostrapLogo },
    ],
    'Front-end': [
      { name: 'React', logo: reactLogo },
      { name: 'Ruby', logo: rubyLogo },
      { name: 'HTML/CSS', logo: htmlLogo },
    ],
    'Back-end': [
      { name: 'Rails', logo: rubyLogo },
      { name: 'PostgreSQL', logo: postgresqlLogo },   
      { name: 'JavaScript', logo: javascriptLogo }, 
    ],
    'Autres': [
      { name: 'Git & Github', logo: gitLogo },
      { name: 'VScode', logo: vscodeLogo },
      { name: 'Trello', logo: trelloLogo },
    ],
  };

  return (
    <section id="skills" className={`skills ${isNightMode ? 'night-mode' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>Ceci est une présentation de quelques unes de mes principales compétences :</p>
              <div className="row skill-row">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category} className={`col-3`}>
                    <h3 className={`category-title ${category.toLowerCase()}`}>{category}</h3>
                    <ul>
                      {skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                          <img className="logo" src={skill.logo} alt={`${skill.name} Logo`} />
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
