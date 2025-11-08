import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("general");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid px-4">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold fs-3" href="#">
          <span className="badge bg-light text-dark">News</span>
          <span className="ms-2">Board</span>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {["general", "technology", "business", "health", "sports", "entertainment"].map((category) => (
              <li className="nav-item" key={category}>
                <button
                  className={`nav-link btn btn-link ${
                    activeCategory === category ? "active-category" : "text-light"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
