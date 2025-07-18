import React from 'react';
import './projects.css';

import campusNaviImg from '../../assets/project/campusnavi.png';
import ecommerceImg from '../../assets/project/ecom.png';
import morseCodeImg from '../../assets/project/morsecode.png';

const projects = [
  {
    name: 'Campus Navigator',
    description: 'An intuitive app to navigate in the campus easily.',
    image: campusNaviImg,
    projectLink: 'https://campus-navigation-nu.vercel.app/',
    codeLink: 'https://github.com/perumallaharshitha/Campus-Navigator',
  },
  {
    name: 'E-commerce Website',
    description: 'An ecommerce website feasible to shop online with ease.',
    image: ecommerceImg,
    projectLink: 'https://e-com-app-nine.vercel.app/',
    codeLink: 'https://github.com/perumallaharshitha/E-Com-App',
  },
  {
    name: 'Morse Code Translator',
    description: 'Translate text to Morse code and vice versa.',
    image: morseCodeImg,
    projectLink: 'https://morse-code-translator-psi.vercel.app/',
    codeLink: 'https://github.com/perumallaharshitha/Morse-Code-Generator',
  },
];

function Projects() {
  return (
    <>
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="probtngrp">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="probtn">
                View Project
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="probtn">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
