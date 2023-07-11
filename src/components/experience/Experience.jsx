import "./experience.css";
import {
  technicalData,
  experienceData,
  scholarshipData,
  educationData,
} from "./Data";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";

const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // toggle
  const descriptionContent = document.getElementsByClassName(
      "journey__description"
    ),
    descriptionHeader = document.querySelectorAll(".journey__data");

  function activeExpand() {
    let itemClass = this.nextSibling.className;

    for (let i = 0; i < descriptionContent.length; i++) {
      descriptionContent[i].className =
        "journey__description description__close";
    }
    if (itemClass === "journey__description description__close") {
      this.nextSibling.className = "journey__description description__open";
    }
    if (itemClass === "journey__description description__open") {
      this.nextSibling.className = "journey__description description__open";
    }
  }

  descriptionHeader.forEach((element) => {
    element.addEventListener("click", activeExpand);
  });

  return (
    <section className="journey section" id="experience">
      <h2 className="section__title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["M", "y", " ", "J", "o", "u", "r", "n", "e", "y"]}
          idx={15}
        />
      </h2>
      <span className="section__subtitle"></span>

      <div className="journey__container container">
        <div className="journey__tabs">
          <div
            className={
              toggleState === 2
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap journey__icon"></i>
            <span className="journey__heading">Education</span>
          </div>

          <div
            className={
              toggleState === 1
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-rocket journey__icon"></i>
            <span className="journey__heading">Experience</span>
          </div>

          <div
            className={
              toggleState === 3
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-star journey__icon"></i>
            <span className="journey__heading">Volunteering</span>
          </div>
          <div
            className={
              toggleState === 4
                ? "journey__button journey__active button--flex"
                : "journey__button button--flex"
            }
            onClick={() => toggleTab(4)}
          >
            <i className="uil uil-award journey__icon"></i>
            <span className="journey__heading">Award&#x2B29;Scholarship</span>
          </div>
        </div>

        <div className="journey__sections">
          <div
            className={
              toggleState === 2
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            {educationData.map((item) => {
              return (
                <>
                  <div className="journey__data">
                    <img src={item.image} alt="" className="journey__img" />
                    <div className="journey__text-box">
                      <h3 className="journey__title">{item.title}</h3>
                      <h4 className="journey__company">
                        {item.company}
                        <span className="journey__date">{item.date}</span>
                      </h4>
                      <div className="education__description">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div
            className={
              toggleState === 1
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            {technicalData.map((item) => {
              return (
                <>
                  <div className="journey__data">
                    <img src={item.image} alt="" className="journey__img" />
                    <div className="journey__text-box">
                      <h3 className="journey__title">{item.title}</h3>
                      <h4 className="journey__company">{item.company}</h4>
                      <div className="journey__date">{item.date}</div>
                    </div>
                    <i className="uil uil-angle-down expand__icon"></i>
                  </div>
                  <span className="journey__description">
                    {item.description}
                  </span>
                </>
              );
            })}
          </div>

          <div
            className={
              toggleState === 3
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            {experienceData.map((item) => {
              return (
                <>
                  <div className="journey__data">
                    <img src={item.image} alt="" className="journey__img" />
                    <div className="journey__text-box">
                      <h3 className="journey__title">{item.title}</h3>
                      <h4 className="journey__company">{item.company}</h4>
                      <div className="journey__date">{item.date}</div>
                    </div>
                    <i className="uil uil-angle-down expand__icon"></i>
                  </div>
                  <div className="journey__description">{item.description}</div>
                </>
              );
            })}
          </div>

          <div
            className={
              toggleState === 4
                ? "journey__content journey__content-active"
                : "journey__content"
            }
          >
            {scholarshipData.map((item) => {
              return (
                <>
                  <div className="journey__data">
                    <img src={item.image} alt="" className="journey__img" />
                    <div className="journey__text-box">
                      <h3 className="journey__title">{item.title}</h3>
                      <h4 className="journey__company">{item.company}</h4>
                      <div className="journey__date">{item.date}</div>
                    </div>
                  </div>
                  {/* <span className="journey__description"  id='journey__description'>
                  {item.description}
                </span> */}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
