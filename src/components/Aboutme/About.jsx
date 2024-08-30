import React from "react";
import "./about.css";
import Map from "../MapSection/Map";

const About = ({ prop, isDark }) => {
  return (
    <>
      <div className="about" ref={prop} style={{ color: isDark ? "white" : "black" }}>
        <div className="about-title">
          <h1 >About me</h1>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src="../public/images/My new image.jpg" alt="" />
          </div>

          <div className="about-right">
            <div className="about-para">
              <p style={{ color: isDark ? "white" : "black" }}>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ver
              </p>
              <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>React</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next Js</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS of EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr />
        </div>  
        <div className="map">
          <h1>Find me Here</h1>
          <Map />
        </div>
      </div>
    </>
  );
};

export default About;
