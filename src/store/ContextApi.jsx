import { createContext, useMemo, useRef } from "react";

export const StoreContext = createContext({
  list: [],
});

export const StoreProvider = ({ children }) => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const aboutSection = useRef();

  const list = useMemo(
    () => [
      { name: "Home", ref: section1 },
      { name: "Project", ref: section2 },
      { name: "Skills", ref: section3 },
      { name: "Emails", ref: section4 },
      { name: "About me", ref: aboutSection },
    ],
    []
  );
  const contextValue = [
    section1,
    section2,
    section3,
    section4,
    aboutSection,
    list,
  ];

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
