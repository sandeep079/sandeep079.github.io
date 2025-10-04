import "./footer.css";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";

const Footer = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* <h1 className="footer__title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["स", "न्", "दी","प", " ", "या", "द", "व"]}
            idx={15}
          />
        </h1> */}

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            className="footer__social-link"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {" "}
            <i className="uil uil-envelope"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sandeep-yadav-71b955274/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/sandeep079"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://medium.com/@079bel078.sandeep"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-medium"></i>
          </a>

          <a
            href="https://www.instagram.com/_sanyadav145/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/sandeep.yadav.424883/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://x.com/SandeepK079"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.youtube.com/@sandeep7703"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169;2025{" "}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["सं", "दी","प", " ", "या", "द", "व"]}
            idx={15}
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
