import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        Skills
      </h2>
      <span className="section-subtitle" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        My Technical Level
      </span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
