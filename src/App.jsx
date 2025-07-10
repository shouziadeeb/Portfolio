import { useRef, useState } from "react";
import { Header } from "./components/HeaderSection/Header";
import { Section1 } from "./components/Section1Hero/Section1";
import Section2 from "./components/Section2Hero2/Section2";
import Footer from "./components/FooterSection/Footer";
import Section3 from "./components/Section3Skills/Section3";
import Email from "./components/Section4Emailme/Email";
import About from "./components/Aboutme/About";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";

function App() {
  let prevScrollpos = window.pageYOffset;
  console.log("prevScrollpos=>", prevScrollpos);
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".header_main").style.top = "0";
    } else {
      document.querySelector(".header_main").style.top = "-8rem";
    }
    console.log("prevScrollpos1=>", prevScrollpos);
    prevScrollpos = currentScrollPos;
    console.log("prevScrollpos=>", prevScrollpos);
    console.log("currentScrollPos=>", currentScrollPos);
  };

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const aboutSection = useRef();

  const props = {
    section1,
    section2,
    section3,
    section4,
    aboutSection,
  };
  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <main
      className={`main_App_container ${isDark ? 'dark' : 'light'}`}
      style={{
        background: 'transparent',
      }}
    >
      <AnimatedBackground isDark={isDark} />
      <Header {...props} isDark={isDark} handleDarkMode={handleDarkMode} />
      <Section1 prop={section1} isDark={isDark} />
      <Section2 prop={section2} isDark={isDark} />
      <Section3 prop={section3} isDark={isDark} />
      <Email prop={section4} isDark={isDark} />
      <About prop={aboutSection} isDark={isDark} />
      <Footer isDark={isDark} />
    </main>
  );
}

export default App;
