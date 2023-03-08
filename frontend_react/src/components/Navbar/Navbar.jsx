import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <div>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="Logo" />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#{item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
