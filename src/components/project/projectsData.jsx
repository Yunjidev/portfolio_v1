// src/components/project/ProjectsData.js

import rustoffProject1 from "../../assets/img/skills-logo/rustoff-project1.png";
import rustoffProject2 from "../../assets/img/skills-logo/rustoff-project2.png";
import rustoffProject3 from "../../assets/img/skills-logo/rustoff-project3.png";

console.log("Path 1:", rustoffProject1);
console.log("Path 2:", rustoffProject2);
console.log("Path 3:", rustoffProject3);

const projects = [
  {
    title: 'Projet 1',
    description: 'Description du projet 1.',
    images: [rustoffProject1, rustoffProject2, rustoffProject3],
    liveLink: 'lien vers le projet en direct 1',
    codeLink: 'lien vers le code source 1',
  },
  // Ajoute d'autres projets ici...
];

export default projects;
