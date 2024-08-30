import "./section1.css";

export const Section1 = ({ prop,isDark }) => {
  return (
    <section className="first_section" ref={prop}>
      <div className="left_section">
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
      <div className="right_section">
        <img src="public\images\undraw_firmware_re_fgdy.svg" alt="" />
      </div>
    </section>
  );
};
