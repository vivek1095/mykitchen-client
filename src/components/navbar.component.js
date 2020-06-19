import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          MY KITCHEN
        </Link>
        <div className="collpase-navbar-collpase" />
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <Link
              to="/login"
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
            >
              Login
            </Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li className="navbar-item">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon
                icon={faCartPlus}
                fixedWidth
                transform="grow-6 left-1 up--1"
                color="black"
              />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
