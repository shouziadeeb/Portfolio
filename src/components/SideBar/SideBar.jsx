import "./sidebar.css";
import { IoMdClose } from "react-icons/io";

const SideBar = ({
  prop = [],
  handleScrollComponent,
  setState,
  isDark,
  handleDarkMode,
  state,
}) => {
  // const menuTrue = state && "block";
  return (
    <>
      <div
        className="sidebar_closer"
        style={{ width: state ? "100%" : "0" }}
        onClick={() => setState(false)}
      >
        {" "}
      </div>
      <div className="sidebar_main" style={{ width: state ? "60%" : "0" }}>
        <div className="content">
          <div className="exit_btn">
            <IoMdClose
              onClick={() => {
                if (state) setState(false);
              }}
            />
          </div>
          <div className="side_menu">
            <ul>
              {state &&
                prop.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleScrollComponent(item.ref)}
                  >
                    {item.name}
                  </li>
                ))}
              {isDark ? (
                <i class="bx bxs-sun" onClick={handleDarkMode}>
                  <p>Light</p>
                </i>
              ) : (
                <i class="bx bxs-moon" onClick={handleDarkMode}>
                  <p>Dark</p>
                </i>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
