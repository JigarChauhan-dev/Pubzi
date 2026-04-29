import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckToken from "../utils/CheckToken";
import Logout from "../utils/Logout";

function Header() {
  let [token, setToken] = useState("");

  useEffect(() => {
    let token = CheckToken();
    setToken(token);
  }, []);

  // console.log(token);

  return (
    <>
      <div>
        {/* Offcanvas Area Start */}
        <div className="fix-area">
          <div className="offcanvas__info style-2">
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <a href="index.html">
                      <img
                        src="assets/img/logo/black-logo.svg"
                        alt="logo-img"
                      />
                    </a>
                  </div>
                  <div className="offcanvas__close">
                    <button>
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <p className="text d-none d-xl-block">
                  Built for gamers who demand speed, stability, and a smooth
                  experience every time.
                </p>
                <div className="mobile-menu fix mb-3" />
                <div className="sideber-image">
                  <img src="assets/img/header/sideber.jpg" alt="img" />
                </div>
                <div className="offcanvas__contact">
                  <h4>Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="#">Ahmedabad, Gujarat, India</a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="mailto:info@example.com">
                          <span className="mailto:support@gamershub.in">
                            support@gamershub.in
                          </span>
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">
                          Mod-friday, 09am -05pm
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15 mb-4">
                        <i className="far fa-phone" />
                      </div>
                      <div className="offcanvas__contact-text mb-4">
                        <a href="tel:+11002345909">+919876543210</a>
                      </div>
                    </li>
                  </ul>
                  {/* <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas__overlay" />
      </div>

      <header id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="header__hamburger d-xl-block my-auto">
                  <div className="sidebar__toggle">
                    <img src="assets/img/logo/ber.svg" alt />
                  </div>
                </div>
                <div className="logo">
                  <a href="index.html" className="header-logo">
                    <img
                      src="assets/img/logo/white-logo-3.svg"
                      alt="logo-img"
                    />
                  </a>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center mt-0">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <Link to={"/"} className="border-none">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about"}>About Us</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to={"/game"}>Game</Link>
                        </li>
                        <li>
                          <Link to={"/bookinghistory"}>bookinghistory</Link>
                        </li>
                        <li>
                          <Link to={"/contact"}>Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header-right-icon">
                  {token ? (
                    <>
                      <div className="header-button">
                        <button
                          onClick={() => {
                            Logout();
                          }}
                          className="theme-btn style-2"
                        >
                          <span className="left-line" />
                          Logout
                        </button>
                      </div>

                      <div className="header-button">
                        <Link to={"/profile"} className="theme-btn style-2">
                          <span className="left-line" />
                          <span className="fa fa-user"></span>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="header-button">
                        <Link to={"/login"} className="theme-btn style-2">
                          <span className="left-line" />
                          Login
                        </Link>
                      </div>

                      <div className="header-button">
                        <Link to={"/signup"} className="theme-btn style-2">
                          <span className="left-line" />
                          Signup
                        </Link>
                      </div>
                    </>
                  )}
                  <div className="header__hamburger d-xl-none d-xl-block my-auto">
                    <div className="sidebar__toggle">
                      <img src="assets/img/logo/dot-ber.svg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
