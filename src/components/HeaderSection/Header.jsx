import { IoMdMenu } from "react-icons/io";
import "./header.css";
import { useMemo, useState } from "react";
import SideBar from "../SideBar/SideBar";

export const Header = ({
  section1,
  section2,
  section3,
  section4,
  aboutSection,
  isDark,
  handleDarkMode,
}) => {
  const [state, setState] = useState(false);
  const handleScrollComponent = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };
  const list = [
    { name: "Home", ref: section1 },
    { name: "Project", ref: section2 },
    { name: "Skills", ref: section3 },
    { name: "Emails", ref: section4 },
    { name: "About ", ref: aboutSection },
  ];

  return (
    <>
      <SideBar
        prop={list}
        handleScrollComponent={handleScrollComponent}
        state={state}
        setState={setState}
        isDark={isDark}
        handleDarkMode={handleDarkMode}
      />
      <header
        className="header_main"
        style={{
          background: isDark ? "#00000038" : "#ffffff63",
          backdropFilter: !isDark && "blur(1rem)",
          boxShadow: !isDark && "0 0 3px black",
        }}
      >
        <nav>
          <img
            src="images/shouzab.png"
            alt=""
            style={{
              filter: !isDark && "brightness(0%)",
            }}
          />
        </nav>
        <nav className="second_nav">
          <div className="menu">
            <IoMdMenu
              onClick={() => setState(true)}
              style={{
                color: isDark ? "white" : "black",
              }}
            />
          </div>
          <ul>
            {list.map((item, index) => (
              <li
                style={{ color: isDark ? "white" : "black" }}
                key={index}
                onClick={() => handleScrollComponent(item.ref)}
              >
                {item.name}
              </li>
            ))}

            {isDark ? (
              <i class="bx bxs-sun" onClick={handleDarkMode}></i>
            ) : (
              <i class="bx bxs-moon" onClick={handleDarkMode}></i>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
