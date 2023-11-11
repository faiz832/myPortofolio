import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="footer-link">
              Services
            </a>
          </li>
          <li>
            <a href="#portofolio" className="footer-link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://www.instagram.com/" className="footer-social-icon" target="blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://facebook.com/" className="footer-social-icon" target="blank">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://twitter.com/" className="footer-social-icon" target="blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer-copy">&#169; Faiz, All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
