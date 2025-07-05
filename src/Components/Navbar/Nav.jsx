import React from "react";
import { Link } from "react-router";
import logo from "../../assets/freshcart-logo.svg";

export default function Nav() {
  return (
    <>
      <style>{`
        .social-media i {
          transition: transform 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }

        .social-media i:hover {
          transform: scale(1.2) rotate(10deg);
          color: #1abc9c;
        }

        .navbar-nav .nav-item .nav-link {
          transition: all 0.3s ease;
        }

        .navbar-nav .nav-item .nav-link:hover {
          color: green !important;
          transform: scale(1.1);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Brands
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-2">
              <div className="social-media mt-2">
                <i className="fa-brands fs-4 mx-2 fa-facebook"></i>
                <i className="fa-brands fs-4 mx-2 fa-instagram"></i>
                <i className="fa-brands fs-4 mx-2 fa-tiktok"></i>
                <i className="fa-brands fs-4 mx-2 fa-youtube"></i>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Login">
                  login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
