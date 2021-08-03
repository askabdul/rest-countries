import React, { useEffect, useState } from "react";
import "./style.scss";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {});

  const dark = () => {
    const toggleDark = document.querySelector("#toggle");
    const navbar = document.querySelector("#navbar_dark");
    const search = document.querySelector("#site-search");
    const filter = document.querySelector(".el-input__inner");
    const dropdown = document.querySelector(".el-select-dropdown");
    const countries = document.querySelectorAll(".country");
    const content = document.querySelectorAll(".content");
    toggleDark.classList.toggle("dark");
    navbar.classList.toggle("nav");
    if (search) {
      search.classList.toggle("input_search");
    }

    if (filter) {
      filter.classList.toggle("inner");
    }

    if (dropdown) {
      dropdown.classList.toggle("dropdown");
    }

    content.forEach((con) => {
      con.classList.toggle("color_toggle");
    });

    countries.forEach((cont) => {
      cont.classList.toggle("color_change");
    });
  };

  return (
    <div className="navbar" id="navbar_dark">
      <div className="world">Where in the world?</div>
      <div className="mode" onClick={() => dark()}>
        <i className="far fa-moon"></i>
        Dark Mode
      </div>
    </div>
  );
};
