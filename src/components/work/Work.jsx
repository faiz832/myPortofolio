import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portofolio">
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        Portofolio
      </h2>
      <span className="section-subtitle" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        Most recent work
      </span>

      <Works />
    </section>
  );
};

export default Work;
