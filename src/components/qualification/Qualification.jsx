import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        Qualification
      </h2>
      <span className="section-subtitle" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        My Personal Journey
      </span>

      <div className="qualification-container container" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        <div className="qualification-tabs">
          <div className={toggleState === 1 ? "qualification-button button-flex qualification-active" : "qualification-button button-flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification-icon"></i>Education
          </div>
          <div className={toggleState === 2 ? "qualification-button button-flex qualification-active" : "qualification-button button-flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification-icon"></i>Experience
          </div>
        </div>

        <div className="qualification-section">
          <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web DANCOK</h3>
                <span className="qualification-subtitle">Telkom Purwokerto Institute of Technology</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Art Director</h3>
                <span className="qualification-subtitle">Telkom Purwokerto Institute of Technology</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Development</h3>
                <span className="qualification-subtitle">Telkom Purwokerto Institute of Technology</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">UX Expert</h3>
                <span className="qualification-subtitle">Telkom Purwokerto Institute of Technology</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Design</h3>
                <span className="qualification-subtitle">Telkom Purwokerto Institute of Technology</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Art Director</h3>
                <span className="qualification-subtitle">Telkom Purwokerto Institute of Technology</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Development</h3>
                <span className="qualification-subtitle">Telkom Purwokerto Institute of Technology</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
