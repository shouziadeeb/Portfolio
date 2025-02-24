import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./footer.css";
function Footer({ isDark }) {
  return (
    <div
      className="footer"
      style={{
        background: isDark ? "black" : "#E6E6E6",
        color: isDark ? "white" : "black",
      }}
    >
      <div className="container">
        <footer className="py-5">
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <div className="socialMediaDiv">
              <p>Connect here</p>
              <ul className="social-media-icons">
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaSquareXTwitter />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>
              Contact us at -{" "}
              <span style={{ fontWeight: "bold" }}>{"9756304445"}</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
