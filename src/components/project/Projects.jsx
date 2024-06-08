/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rustoffProject1 from "../../assets/img/skills-logo/rustoff-project1.png";
import rustoffProject2 from "../../assets/img/skills-logo/rustoff-project2.png";
import rustoffProject3 from "../../assets/img/skills-logo/rustoff-project3.png";
import avatar1 from "../../assets/img/skills-logo/rust.png";
import avatar2 from "../../assets/img/skills-logo/dao.png"; 
import avatar3 from "../../assets/img/skills-logo/g-bigtime.svg";
import svg1 from "../../assets/img/skills-logo/ruby-logo.svg";
import svg2 from "../../assets/img/skills-logo/tailwind-logo.svg";
import svg3 from "../../assets/img/skills-logo/postgresql-logo.svg"; 
import svg4 from "../../assets/img/skills-logo/javascript-logo.svg"; 
import svg5 from "../../assets/img/skills-logo/html-logo.svg"; 
import svg6 from "../../assets/img/skills-logo/react-1.svg"; 
import svg7 from "../../assets/img/skills-logo/typescript.svg"; 
import svg8 from "../../assets/img/skills-logo/strapi-2.svg"; 
import svg9 from "../../assets/img/skills-logo/css-3.svg";
import dao from "../../assets/img/daowebsite.png";
import dao1 from "../../assets/img/dao1.png";
import dao2 from "../../assets/img/dao2.png";
import dao3 from "../../assets/img/dao3.png";
import dao4 from "../../assets/img/dao4.png";
import wiki from "../../assets/img/wiki.png";
import wiki2 from "../../assets/img/wiki2.png";
import maslogo from "../../assets/img/Mas/logo.png";
import masimg2 from "../../assets/img/Mas/2.png";
import masimg3 from "../../assets/img/Mas/3.png";


import "./project.css"

const Projects = () => {
  const techLogos = {
    svg1,
    svg2,
    svg3,
    svg4,
    svg5,
    svg6,
    svg7,
    svg8,
    svg9,
  };

  const projectImages = {
    "RustOff": [rustoffProject1, rustoffProject2, rustoffProject3],
    "Website ChronoDAO": [dao , dao1, dao2, dao3, dao4],
    "Wiki BigTime": [wiki,wiki2],
    "Mas des Sources" : [masimg2, masimg3],
  };

  const projectAvatars = {
    "RustOff": avatar1,
    "Website ChronoDAO": avatar2,
    "Wiki BigTime": avatar3,
    "Mas des Sources" : maslogo,
  };

  const projects = [
    {
      title: "RustOff",
      description: "Création d'un site Web pour un graphiste. Site créé avec un Front-end Réact et Tailwind, Back-end avec Ruby on Rails.",
      technologies: ["svg1", "svg2", "svg3", "svg4", "svg5", "svg6"],
      details: ["Boutique en ligne (Stripe).", "Création de devis et gestion Admin des devis.", "Panel Admin.", "Mailer.", "Compte Client.", "Portfolio."],
      codeLink: "https://github.com/Yunjidev/rustoff",
      liveLink: "#"
    },
    {
      title: "Website ChronoDAO",
      description: "Amélioration et ajout dans le site de la guilde ChonoDAO pour le jeu BigTime Web3. Front-end Réact - TypeScript, Back-end - Strapi.",
      technologies: ["svg5", "svg7", "svg6", "svg8", "svg9"],
      details: ["SiteWeb complet pour la guilde ChonoDAO.", "Création d'un back-end Strapi.", "Tout le site est modifiable via le back-end Strapi.","Ainsi les rédacteurs peuvent éditer le site sans toucher au code, juste en éditant, en ajoutant des données dans Strapi."],
      codeLink: "https://github.com/ChronoDAO/website",
      liveLink: "https://www.chronodao.com/"
    },
    {
      title: "Wiki BigTime",
      description: "Création du Wikipédia pour le jeu Web3 Bigtime et pour la ChonoDAO. Front-end - React - TypeScript, Back-end - Strapi et API Charmverse.",
      technologies: ["svg5", "svg7", "svg6", "svg8", "svg9"],
      details: ["Utilisation de l'API Charmverse. Charmverse est une plateforme similaire à Notion, mais dédiée aux jeux Web3.", "Les rédacteurs éditent leurs articles de Wikipédia directement sur Charmverse.", " L'API récupère ensuite ces articles sur Charmverse, les transmet et affiche leur format Markdown directement sur le site.", "C'est la première fois que leur API est utilisée pour une telle fonctionnalité."],
      codeLink: "https://github.com/Yunjidev/wiki_bigtime",
      liveLink: "https://wiki-two-zeta.vercel.app/"
    },
    {
      title: "Mas des Sources",
      description: "Création du Wikipédia pour le jeu Web3 Bigtime et pour la ChonoDAO. Front-end - React - TypeScript, Back-end - Strapi et API Charmverse.",
      technologies: ["svg6", "svg5", "svg4", "svg2"],
      details: [
        "Site créé le Mas des Sources - Cévenol, offrant une expérience utilisateur optimale pour les visiteurs à la recherche d'hébergements dans les Cévennes.",
        "Site fait avec React, JS et Tailwind, comprenant plusieurs fonctionnalités",
        "Le site contient plusieurs pages, notamment des pages de présentation, des pages dédiées à chaque hébergement, ainsi que des pages pour les activités et les loisirs disponibles dans la région ect",
        "Offrant ainsi une vitrine numérique complète pour promouvoir ses services et ses offres d'hébergement."
      ],
      codeLink: "https://github.com/Yunjidev/mas_des_sources",
      liveLink: "https://mas-des-sources.vercel.app/"
    },
  ];

  const [expanded, setExpanded] = React.useState(Array(projects.length).fill(false));

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div id="projects" className="section-header">
        <h2>Mes Projets</h2>
        <p>Découvrez certains de mes projets récents.</p>
      </div>
      <div className="card-container">
        {projects.map((project, index) => (
          <Card key={project.title} className={`project-card ${expanded[index] ? 'is-expanded' : ''}`} sx={{ maxWidth: 400, bgcolor: '#12191f', color: '#ffffff', flex: '1 0 calc(25% - 32px)', margin: '16px', display: 'flex', flexDirection: 'column' }}>
            <CardHeader
              avatar={<Avatar sx={{ width: 50, height: 50 }} aria-label="project" src={projectAvatars[project.title]} />}
              title={<Typography variant="h6" style={{ fontSize: 20 }}>{project.title}</Typography>}
              subheader={project.technologies.map(tech => <img key={tech} src={techLogos[tech]} alt={tech} style={{ width: 30, marginRight: 5 }} />)}
            />
              <CardMedia
                component="div"
                height="194"
                className="slider-container"
              >
                <Slider {...sliderSettings}>
                  {projectImages[project.title].map((image, idx) => (
                    <img key={idx} src={image} alt={`Image ${idx}`} style={{ width: '100%', height: 'auto' }} />
                  ))}
                </Slider>
                <div className="slider-indicator">
                  <Typography variant="caption" color="inherit">Faites glisser pour voir plus</Typography>
                </div>
              </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body2" color="ffffff">
                {project.description}
              </Typography>
              <div className="button">
                <a href={project.codeLink}>
                  <button className="code-button">Code</button>
                </a>
                <a href={project.liveLink}>
                  <button className="code-button">Live</button>
                </a>
              </div>
            </CardContent>
            <CardActions disableSpacing sx={{ alignSelf: 'flex-end' }}>
              <IconButton aria-label="expand" onClick={() => handleExpandClick(index)}>
                <ExpandMoreIcon sx={{ color: 'white', transform: expanded[index] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Plus d'informations :
                  <hr />
                </Typography>
                {project.details.map((detail) => (
                  <Typography key={detail} paragraph>
                    - {detail}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Projects;
