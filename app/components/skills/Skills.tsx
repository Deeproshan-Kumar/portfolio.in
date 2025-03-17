import React from "react";
import { skills } from "@/app/lib/constants";
import SectionIntro from "../section-intro/SectionIntro";
import Skill from "../skill/Skill";
import "./Skills.scss";

export default function Skills() {
  return (
    <section className="section skills py-5" id="skills" aria-label="Skills Section">
      <div className="container">
        <SectionIntro title="Skills" description="My Technical Skills" />
        <div className="skills-wrapper">
          {skills.map((skill, index) => {
            return (
              <React.Fragment key={skill?.id || index}>
                <Skill
                  icon={skill?.icon}
                  name={skill?.name}
                  percentage={skill?.percentage}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
