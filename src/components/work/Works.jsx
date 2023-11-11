import React, { useState } from "react";
import "./work.css";
import { projectData } from "./Data";
import { projectNav } from "./Data";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work-filters" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work-item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <Swiper
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="work-container container grid" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          {projects.map((item) => {
            return (
              <SwiperSlide>
                <div className="work-card " key={item.id}>
                  <img src={item.image} alt="" className="work-img" />
                  <div>
                    <h3 className="work-title">{item.title}</h3>
                    <p className="work-description">{item.desc}</p>
                    <a href={item.link} className="work-button" target="blank">
                      Demo <i className="bx bx-right-arrow-alt work-button-icon"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Works;
