import React from "react";
import { educations, experiences } from "@/app/lib/constants";
import SectionIntro from "../section-intro/SectionIntro";
import Timeline from "../timeline/Timeline";
import "./About.scss";

export default function About() {
  return (
    <section className="section about py-5" id="about" aria-label="About Section">
      <div className="container">
        <SectionIntro title="About" description="My Introduction" />
        <div className="introduction">
          <p>
            Hello, My name is <strong>Deeproshan Kumar</strong>. I am a full
            time <strong>SDE</strong> | <strong>Front End Engineer</strong>.
          </p>
          <p>
            I make website Front End using set of technologies like{" "}
            <strong>
              HTML, CSS, JavaScript, TypeScript, SASS/SCSS, Bootstrap, Tailwind
              CSS, ReactJS, NextJS, Redux Toolkit, WordPress
            </strong>{" "}
            and <strong>Elementor</strong>.
          </p>
        </div>
        <SectionIntro
          title="Education & Experiencess"
          description="My Personal Journey"
        />
        <div className="timeline-wrapper">
          <div className="panel left">
            {educations.map((education, index) => {
              return (
                <React.Fragment key={education?.id || index}>
                  <Timeline
                    title={education?.title}
                    subtitle={education?.subtitle}
                    description={education?.description}
                    datetime={education.datetime}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className="panel right">
            {experiences.map((experience, index) => {
              return (
                <React.Fragment key={experience?.id || index}>
                  <Timeline
                    title={experience?.title}
                    subtitle={experience?.subtitle}
                    description={experience?.description}
                    datetime={experience.datetime}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
