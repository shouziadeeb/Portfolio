import React from "react";
import "./section2.css";

function Section2({ prop }) {
  let ran = "active";
  const handleFocus = () => {};
  return (
    <>
      <section className="section2" ref={prop}>
        <div className="left_section">
          <h1>This is my first PROJECT</h1>
        </div>
        <div className="right_section2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPS87gesz5rMANSJxJIsEWjGL033eQAp8L_g&s"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Section2;
