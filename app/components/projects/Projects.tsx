import React from "react";
import { projects } from "../../lib/projects";
import Button from "../button/Button";
import SectionIntro from "../section-intro/SectionIntro";
import Project from "../project/Project";
import { FaLink } from "react-icons/fa";
import "./Projects.scss";

export default function Projects() {
  return (
    <section
      className="section projects py-5"
      id="projects"
      aria-label="Projects Section"
    >
      <div className="container">
        <SectionIntro title="Projects" description="My Recent Works" />
        <div className="projects-wrapper">
          {projects &&
            projects.slice(0, 20).map((project, index) => {
              const {id, thumbnail, name, tags, description, isLive, projectUrl} = project;
              return (
                <React.Fragment key={id || index}>
                  <Project
                    thumbnail={thumbnail}
                    name={name}
                    tags={tags}
                    description={description}
                    isLive={isLive}
                    projectUrl={projectUrl}
                  />
                </React.Fragment>
              );
            })}
        </div>
        <div className="view-more">
            <Button text="More Projects" link="/projects" icon={<FaLink />} isButton={false} />
        </div>
      </div>
    </section>
  );
}
