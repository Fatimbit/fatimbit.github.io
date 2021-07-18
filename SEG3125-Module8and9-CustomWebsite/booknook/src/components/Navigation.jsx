import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navbar">
      <nav class="navbar navbar-expand navbar-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Book Nook
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/books" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/books">
                  Books
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/meetings" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/meetings">
                  Meetings
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/discussion" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/discussion">
                  Discussion Board
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/signup" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);