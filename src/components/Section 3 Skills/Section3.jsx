import React from "react";
import "./section3.css";
function Section3({ prop, isDark }) {
  const skillsList = [
    {
      skill: "React JS",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa bbshsbb sn2sb ndlckndkcndkncknckdccdkjcckckk",
    },
    {
      skill: "JavaScript",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa bbshsbb sn2sb",
    },
    {
      skill: "C Language",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa bbshsbb sn2sb",
    },
    {
      skill: "HTML",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa bbshsbb sn2sb",
    },
    {
      skill: "CSS",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa bbshsbb sn2sb",
    },
    {
      skill: "Tailwind",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa bbshsbb sn2sb",
    },
    {
      skill: "Bootstrap",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa bbshsbb sn2sb",
    },
  ];
  return (
    <section
      className="section3"
      ref={prop}
      style={{ color: isDark ? "white" : "black" }}
    >
      <div className="heading">
        <h1>This is my skills </h1>
      </div>
      <div className="my_container">
        {skillsList.map((item, index) => (
          <li
            key={index}
            className="box"
            style={{
              background: isDark ? "black" : "#F2F2F2",
              color: isDark ? "white" : "black",
            }}
          >
            <h2>{item.skill}</h2>
            <p
              style={{
                color: isDark ? "white" : "black",
              }}
            >
              {item.text}
            </p>
          </li>
        ))}
      </div>
    </section>
  );
}

export default Section3;
