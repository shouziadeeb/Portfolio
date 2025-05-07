import React from "react";
import "./about.css";
import Map from "../MapSection/Map";

const About = ({ prop, isDark }) => {
  return (
    <>
      <div
        className="about"
        ref={prop}
        style={{ color: isDark ? "white" : "black" }}
      >
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src="images/My new image.jpg" />
          </div>

          <div className="about-right">
            <div className="about-para">
              <p style={{ color: isDark ? "white" : "black" }}>
                {" "}
                I'm Shouzab Farooqui, a passionate Frontend Developer from the
                vibrant city of Amroha, nestled in Uttar Pradesh. With roots in
                the Arts Stream, I've carved my own path into the digital world,
                blending creativity with clean, responsive code. Crafting
                visually stunning and user-friendly web experiences is what I
                love doing. Whether it’s building sleek interfaces or solving
                tricky design challenges, I thrive on bringing ideas to life in
                the browser. Let’s build something amazing together! 🚀
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
            <h1>2+</h1>
            <p>YEARS of SELF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>4+</h1>
            <p>SELF PROJECT COMPLETED</p>
          </div>
          <hr />
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
