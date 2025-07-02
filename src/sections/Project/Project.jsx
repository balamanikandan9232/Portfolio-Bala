import React from "react";
import styles from "./projectstyle.module.css";
import Fugi from "../../assets/Fugi.png";
import freshWorks from "../../assets/Freshworks.png";
import Tentwood from "../../assets/tent.png";
import Car from "../../assets/car.png";
import ProjectCard from "../../common/ProjectCard";

function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshWorks}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Freshworks"
          p="CRM Dashboard"
        />
        <ProjectCard
          src={Fugi}
          link="https://github.com/balamanikandan9232/Social-Media.git"
          h3="Fugitalk"
          p=" Date App"
        />
        <ProjectCard
          src={Tentwood}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Tentwood"
          p="Ticket App"
        />
        <ProjectCard
          src={Car}
          link="https://github.com/balamanikandan9232/rentplus.git"
          h3="Rentplus"
          p="Rental App"
        />
      </div>
    </section>
  );
}

export default Project;
