import "./art.css";
import useScript from "../../hooks/useScript";

const Art = () => {
  useScript();
  return (
    <>
      <section className="art section" id="art">
        {/* <span className="section__subtitle about__subtitle"></span> */}
        <div className="art__container">
          <div className="images">
            <div className="img-1"></div>
            <div className="img-2"></div>
          </div>
          <div className="slider">
            <div className="drag-line">
              <span></span>
            </div>
            <input type="range" min={0} max={100} defaultValue={50} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Art;
