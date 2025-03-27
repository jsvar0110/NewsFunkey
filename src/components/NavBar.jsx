import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              NewsFunkey
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/business"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/entertainment"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/general"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    General
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/health"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/science"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/sports"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/technology"
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// Active style object
const activeStyle = {
  backgroundColor: "#f11946",
  color: "white",
  borderRadius: "5px",
  padding: "8px 10px",
};

export default NavBar;
