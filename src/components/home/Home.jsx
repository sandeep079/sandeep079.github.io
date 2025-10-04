import { useRef, useState, useEffect } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import profile1 from "../../assets/profile.png";
import profile2 from "../../assets/profile2.png";

const Home = () => {
  const imgRef = useRef(null);
  const [showFirst, setShowFirst] = useState(true);

  const handleClick = () => {
    setShowFirst((prev) => !prev);
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img-wrapper" ref={imgRef} onClick={handleClick}>
            <div
              className={`home__img front ${showFirst ? "visible" : ""}`}
              style={{ backgroundImage: `url(${profile1})` }}
            ></div>
            <div
              className={`home__img back ${!showFirst ? "visible" : ""}`}
              style={{ backgroundImage: `url(${profile2})` }}
            ></div>
          </div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
