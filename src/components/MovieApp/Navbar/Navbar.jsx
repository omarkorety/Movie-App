import React from "react";
import popcorn from "./imgs/popcorn.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const FavArr = useSelector((state) => state.favoriteMovies);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src={popcorn} alt="popcorn" width="45" height="45" />
          <Link to="/" className="navbar-brand">
            Movies
          </Link>
        </div>
        <div>
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
                <Link to="/favorites" className="nav-link">
                  <button type="button" className="btn btn-warning position-relative">
                    Favorites
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {FavArr.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
