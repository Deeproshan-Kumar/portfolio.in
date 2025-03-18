"use client";

import React, { useState } from "react";
import Button from "../components/button/Button";
import Project from "../components/project/Project";
import SectionIntro from "../components/section-intro/SectionIntro";
import { projects } from "../lib/projects";
import { FaLink } from "react-icons/fa";
import { ProjectProps } from "../components/project/Project";
import "../components/projects/Projects.scss";

export default function Page() {
  const [projectsData, setProjectsData] = useState<any>(projects);
  const offset = 10;
  const startIndex = 0;
  const [lastIndex, setLastIndex] = useState<number>(10);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const handleLoadMore = () => {
    const nextLastIndex = lastIndex + offset;
    setLastIndex(nextLastIndex);

    if (nextLastIndex >= projectsData.length) {
      setIsLastPage(true);
    }
  };

  return (
    <>
      <section className="section banner" aria-label="Banner">
        <div className="container">
          <h1>Projects</h1>
          <p>Projects Developed By Me...</p>
        </div>
      </section>

      <section
        className="section projects py-5"
        id="projects"
        aria-label="Projects Section"
      >
        <div className="container">
          <SectionIntro title="Projects" description="My Recent Works" />
          <div className="projects-wrapper">
            {projectsData &&
              projectsData
                .slice(startIndex, lastIndex)
                .map((project: ProjectProps, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      <Project {...project} />
                    </React.Fragment>
                  );
                })}
          </div>

          {!isLastPage && (
            <div className="view-more">
              <Button
                text="Load More"
                icon={<FaLink />}
                isButton={true}
                onClick={handleLoadMore}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
