import { useEffect, useRef } from "react";
import "./section1.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Section1 = ({ prop, isDark }) => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(imageRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
    });
  });

  return (
    <section className="first_section" ref={prop}>
      <div className="left_section" ref={textRef}>
        <h2>
          Hello ! <span className="span-heading">Myself,</span>
        </h2>
        <h1>{` SHOUZI ADEEB `}</h1>
        <p style={{ color: isDark ? "white" : "gray" }}>
          Hey'I am a <span>{`<Frontend Developer/> `}</span>
          Proficient in HTML, CSS, JavaScript, and modern frameworks like React
          and Angular. Strong understanding of UI/UX principles and a keen eye
          for detail.
        </p>
      </div>
      <div className="right_section" ref={imageRef}>
        <img src="images/undraw_firmware_re_fgdy.svg" />
      </div>
    </section>
  );
};
