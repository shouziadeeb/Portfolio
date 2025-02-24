import React from "react";
import "./section2.css";

function Section2({ prop, isDark }) {
  const handleClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };
  const projects = [
    {
      name: "FOOD DELIVERY APP",
      title:
        "Developed a food delivery web application that allows users tobrowse restaurant menus, add items to a cart, and place ordersonline. Implemented a clean, responsive design for seamless usage onboth desktop and mobile devices.",
      img: "/images/Screenshot 2024-11-06 101154.png",
      link: "https://foodappbyreact.netlify.app/",
    },
    {
      name: "MUSIC PLAYER",
      img: "/images/Screenshot 2024-11-06 101154.png",
      title:
        "Developed a food delivery web application that allows users tobrowse restaurant menus, add items to a cart, and place ordersonline. Implemented a clean, responsive design for seamless usage onboth desktop and mobile devices.",
    },
  ];
  return (
    <>
      <section
        className="section2"
        ref={prop}
        style={{ color: isDark ? "white" : "black" }}
      >
        <h1 style={{ fontWeight: "bolder" }}>PROJECTS</h1>
        <div className="project_list">
          {projects.map((project) => (
            <div className="projects">
              <img
                src={project.img}
                alt=""
                onClick={() => handleClick(project.link)}
              />
              <div className="project_text">
                <h5>{project.name}</h5>
                <p>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Section2;
