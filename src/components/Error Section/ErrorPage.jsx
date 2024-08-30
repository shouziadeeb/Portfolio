import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ErrorPage({ prop }) {
  const navigate = useNavigate();
  // const handleNavigate = () => {
  //   console.log(navigate);
  //   navigate(-1);
  // };
  return (
    <div className="error_component" >
      <div className="not_found_heading">
        <h4>This Page does not exist...,</h4>
        <h4>please go back to home</h4>
        <div className="error_btn_box">
          <button>
            {" "}
            <NavLink to="/">Back to Home</NavLink>
          </button>
          <button onClick={() => navigate(-1)}>Back to previous</button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
