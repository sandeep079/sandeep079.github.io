import "./project.css";
import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import ranjana_projects from "../../assets/ranjana-projects.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <section className="project section" id="project">
      <h2 className="section__title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["p", "r", "o", "j", "e", "c", "t", "s"]}
          idx={15}
        />
      </h2>
      <span className="section__subtitle">
        <img src={ranjana_projects} alt="" className="project__img__subtitle" />
      </span>
      <Swiper
        className="blog__container project__container"
        // loop={true}
        // autoHeight={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        navigation
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {Data.map(({ id, image, title, stack, link, demo, paper, description }) => {
          return (
            <SwiperSlide className="blog__card project__card">
              <div className="image__section project-image__section">
                <img src={image} alt="" className="project__img" />
              </div>

              <h2 className="project__name">{title}</h2>
              {stack.map((item) => {
                return <button className="stack">{item}</button>;
              })}
              <p className="project__description">{description}</p>
              <div>
                <a href={paper} target="_blank">
                  {paper ? (
                    <button className="button project-button">Paper</button>
                  ) : null}
                </a>
                <a href={link} target="_blank">
                  {link ? (
                    <button className="button project-button">GitHub</button>
                  ) : null}
                </a>
                <a href={demo} target="_blank">
                  {demo ? (
                    <button className="button project-button">Demo</button>
                  ) : null}
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Project;
