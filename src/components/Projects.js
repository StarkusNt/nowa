import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../assets/styles/Projects.css';
import faceitImage from '../assets/images/10lvl-faceit.jpg';
import wzimopoly_board from '../assets/images/wzimopoly.png';
import triangle_logo from '../assets/images/trojkat.jpg';
import exploration_screen from '../assets/images/eksploracja.jpg';
import { useLanguage } from '../context/languageContext';



const Projects = () => {
  const {t} = useLanguage()
  const projects = [
    {
      title: t("project1"),
      descriptionKey: t("project_description1"),
      technologies: t("technologies1"),
      imageUrl: wzimopoly_board,
      link: 'https://github.com/Rivixer/WZIMopoly'
    },
    {
      title: t("project2"),
      descriptionKey: t("project_description2"),
      technologies: t("technologies2"),
      imageUrl: triangle_logo,
      link: 'https://megawrzuta.pl/files/2975376547463af22ee66ed580fe0f82.py'
    },
    {
      title: t("project3"),
      descriptionKey: t("project_description3"),
      technologies: t("technologies3"),
      imageUrl: exploration_screen,
      link: 'https://github.com/J-Dusza/Projekt-Zespolowy'
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">{t("projects_nav")}</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.technologies}</Card.Text>
                <Card.Text>{project.descriptionKey}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                {t("check_project")}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;