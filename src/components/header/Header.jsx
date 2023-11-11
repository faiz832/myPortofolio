import React, { useState } from "react";
import "./header.css";
import picture1 from "../../assets/docs@30.8b9a76a2.avif";
import picture2 from "../../assets/docs-dark@30.1a9f8cbf.avif";

const Header = () => {
  //Change Background
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    //when the scroll is higher than 200 viewport height, add the scroll-header
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, showMenu] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  return (
    <>
      <div className="headerbg">
        <img src={darkmode ? picture2 : picture1} alt="" />
      </div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="index.html" className="nav-logo">
            Faiz
          </a>
          <div className={toggle === true ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list grid">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={() => showMenu(false)}>
                  <i className="uil uil-estate nav-icon"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={() => showMenu(false)}>
                  <i className="uil uil-user nav-icon"></i>About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link" onClick={() => showMenu(false)}>
                  <i className="uil uil-file-alt nav-icon"></i>Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link" onClick={() => showMenu(false)}>
                  <i className="uil uil-briefcase-alt nav-icon"></i>Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#portofolio" className="nav-link" onClick={() => showMenu(false)}>
                  <i className="uil uil-scenery nav-icon"></i>Portofolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={() => showMenu(false)}>
                  <i className="uil uil-message nav-icon"></i>Contact
                </a>
              </li>
            </ul>

            <i class="uil uil-times nav-close" onClick={() => showMenu(false)}></i>
          </div>
          <div className="nav-button">
            <div onClick={() => setDarkmode(!darkmode)}>
              <div className={darkmode ? setDarkMode() : setLightMode()}>
                <i className={darkmode ? "bx bx-moon change-theme" : "bx bx-sun change-theme"}></i>
              </div>
            </div>
            <div className="nav-toggle" onClick={() => showMenu(true)}>
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
