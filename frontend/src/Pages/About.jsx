import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";


function About(){

  return (
    <>
      <div >
        {/* Offcanvas Area Start */}
        <div className="fix-area">
          <div className="offcanvas__info">
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
                  Nullam dignissim, ante scelerisque the is euismod fermentum
                  odio sem semper the is erat, a feugiat leo urna eget eros.
                  Duis Aenean a imperdiet risus.
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
                        <a target="_blank" href="#">
                          Main Street, Melbourne, Australia
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="mailto:info@example.com">
                          <span className="mailto:info@example.com">
                            info@example.com
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
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="far fa-phone" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+11002345909">+11002345909</a>
                      </div>
                    </li>
                  </ul>
                  <div className="social-icon d-flex align-items-center">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas__overlay" />
        {/* GT Search Start */}
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler" />
          <div className="search-popup__content">
            <form
              role="search"
              method="get"
              className="search-popup__form"
              action="#"
            >
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search Here..."
              />
              <button
                type="submit"
                aria-label="search submit"
                className="search-btn"
              >
                <span>
                  <i className="fa-regular fa-magnifying-glass" />
                </span>
              </button>
            </form>
          </div>
        </div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* GT Breadcrunb Section Start */}
            <div
              className="gt-breadcrumb-wrapper bg-cover"
              style={{ backgroundImage: 'url("assets/img/breadcrumb.png")' }}
            >
              <div className="gt-left-shape">
                <img src="assets/img/shape-1.png" alt="img" />
              </div>
              <div className="gt-right-shape">
                <img src="assets/img/shape-2.png" alt="img" />
              </div>
              <div className="gt-blur-shape">
                <img src="assets/img/breadcrumb-shape.png" alt="img" />
              </div>
              <div className="container">
                <div className="gt-page-heading">
                  <div className="gt-breadcrumb-sub-title">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                      about us
                    </h1>
                  </div>
                  <ul
                    className="gt-breadcrumb-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <li>
                      <i className="fa-solid fa-house" />
                    </li>
                    <li>
                      <Link to={"/"}>home :</Link>
                    </li>
                    <li className="color">about us</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* About Section Start */}
            <section className="about-section-2 section-padding fix">
              <div className="about-shape-1">
                <img
                  src="assets/img/home-2/about/about-shape-1.png"
                  alt="img"
                />
              </div>
              <div className="container">
                <div className="about-wrapper-2">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="about-iamge wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <img
                          src="assets/img/home-2/about/aout-01.jpg"
                          alt="img"
                        />
                        <div className="line-shape">
                          <img
                            src="assets/img/home-2/about/line-shape.png"
                            alt="img"
                          />
                        </div>
                        <div className="text-shape float-bob-y">
                          <img
                            src="assets/img/home-2/about/text-shape.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="about-content">
                        <div className="section-title mb-0">
                          <h6 className="wow fadeInUp">
                            about our gaming zone
                          </h6>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            More Than Just a Game We Design the Moments That
                            Matter
                          </h2>
                        </div>
                        <p
                          className="about-text wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          Emerging trends in the esports industry include the
                          growth of mobile esports, the integration of virtual
                          reality in gaming experiences, and the increasing
                          involvement of traditional sports.
                        </p>
                        <div className="counter-wrap-2">
                          <div
                            className="counter-item-2 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <h2>
                              <span className="gt-count">320</span> +
                            </h2>
                            <p>GAME PLAYED</p>
                          </div>
                          <div
                            className="counter-item-2 wow fadeInUp"
                            data-wow-delay=".4s"
                          >
                            <h2>
                              <span className="gt-count">175</span> +
                            </h2>
                            <p>FLAGS TAKEN</p>
                          </div>
                          <div
                            className="counter-item-2 wow fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <h2>
                              <span className="gt-count">79</span> +
                            </h2>
                            <p>DEATH MATCHES</p>
                          </div>
                          <div
                            className="counter-item-2 style-2 wow fadeInUp"
                            data-wow-delay=".8s"
                          >
                            <h2>
                              <span className="gt-count">99</span> %
                            </h2>
                            <p>DEATH MATCHES</p>
                          </div>
                        </div>
                        <Link to={"/about"} className="theme-btn boder-10">
                          About More Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* GT Top Feature Section Start */}
            <section className="gt-top-feature-section fix">
              <div className="container">
                <div className="gt-top-feature-wrapper">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="gt-top-feature-image">
                        <img
                          src="assets/img/home-3/top-feature.png"
                          alt="img"
                        />
                        <div className="gt-bg-shape">
                          <img
                            src="assets/img/home-3/ellipse-bg.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="gt-top-feature-content">
                        <div className="section-title mb-0">
                          <h6 className="wow fadeInUp">top features</h6>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Powerful Features, Perfect Gameplay
                          </h2>
                        </div>
                        <p className="gt-feature-text">
                          We are specialized in developing out-of-the-box
                          solutions using emerging technologies
                        </p>
                        <ul className="gt-feature-icon">
                          <li>
                            <div className="gt-icon">
                              <img
                                src="assets/img/home-3/icon/12.svg"
                                alt="img"
                              />
                            </div>
                            <div className="gt-content">
                              <h3>Graphics &amp; Performance</h3>
                              <p>
                                We’re passionate about what we do and always
                                seek new opportunities. We are also flexible and
                                proactive in business.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="gt-icon">
                              <img
                                src="assets/img/home-3/icon/13.svg"
                                alt="img"
                              />
                            </div>
                            <div className="gt-content">
                              <h3>Audio &amp; Sound Design</h3>
                              <p>
                                We’re passionate about what we do and always
                                seek new opportunities. We are also flexible and
                                proactive in business.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="gt-icon">
                              <img
                                src="assets/img/home-3/icon/14.svg"
                                alt="img"
                              />
                            </div>
                            <div className="gt-content">
                              <h3>Story &amp; World-Building</h3>
                              <p>
                                We’re passionate about what we do and always
                                seek new opportunities. We are also flexible and
                                proactive in business.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* GT Video Section Start */}
            <div className="gt-video-section section-padding fix">
              <div className="container">
                <div
                  className="gt-video-wrapper gt-style-3 bg-cover"
                  style={{
                    backgroundImage:
                      "url(assets/img/home-1/feature/video-bg.jpg)",
                  }}
                >
                  <div className="gt-video-content">
                    <h6 className="wow fadeInUp" data-wow-delay=".3s">
                      Love To Play
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".5s">
                      Sweet Revenge <br />
                      Gameplay
                    </h2>
                  </div>
                  <a
                    href="game-details.html"
                    className="theme-btn boder-10 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    play now
                  </a>
                </div>
              </div>
            </div>
            {/* GT Testimonial Section Start */}
            <section className="gt-testimonial-section-3 fix section-padding pt-0">
              <div className="container">
                <div className="gt-testimonial-wrapper-3">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <div className="section-title-2">
                          <h6 className="wow fadeInUp">Our Testimonials</h6>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Our Testimonials
                          </h2>
                        </div>
                        <div className="swiper gt-testimonial-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="gt-testimonial-card-item">
                                <div className="gt-client-info">
                                  <div className="image">
                                    <img
                                      src="assets/img/home-3/testimonial/client-1.png"
                                      alt="img"
                                    />
                                  </div>
                                  <div className="text">
                                    <h6>Daniel Smith</h6>
                                    <p>Senior engineer</p>
                                  </div>
                                </div>
                                <div className="gt-testi-content">
                                  <div className="icon">
                                    <img
                                      src="assets/img/home-3/icon/quate.svg"
                                      alt="img"
                                    />
                                  </div>
                                  <p>
                                    This digital agency completely transformed
                                    our online presence. Their expertise,
                                    creativity, and attention to detail exceeded
                                    all our expectations. We highly rtheir...
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="gt-testimonial-card-item">
                                <div className="gt-client-info">
                                  <div className="image">
                                    <img
                                      src="assets/img/home-3/testimonial/client-1.png"
                                      alt="img"
                                    />
                                  </div>
                                  <div className="text">
                                    <h6>Daniel Smith</h6>
                                    <p>Senior engineer</p>
                                  </div>
                                </div>
                                <div className="gt-testi-content">
                                  <div className="icon">
                                    <img
                                      src="assets/img/home-3/icon/quate.svg"
                                      alt="img"
                                    />
                                  </div>
                                  <p>
                                    This digital agency completely transformed
                                    our online presence. Their expertise,
                                    creativity, and attention to detail exceeded
                                    all our expectations. We highly rtheir...
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="gt-testimonial-card-item">
                                <div className="gt-client-info">
                                  <div className="image">
                                    <img
                                      src="assets/img/home-3/testimonial/client-1.png"
                                      alt="img"
                                    />
                                  </div>
                                  <div className="text">
                                    <h6>Daniel Smith</h6>
                                    <p>Senior engineer</p>
                                  </div>
                                </div>
                                <div className="gt-testi-content">
                                  <div className="icon">
                                    <img
                                      src="assets/img/home-3/icon/quate.svg"
                                      alt="img"
                                    />
                                  </div>
                                  <p>
                                    This digital agency completely transformed
                                    our online presence. Their expertise,
                                    creativity, and attention to detail exceeded
                                    all our expectations. We highly rtheir...
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-dot mt-3">
                          <div className="dot" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="gt-testimonial-image">
                        <img
                          src="assets/img/home-3/testimonial-image.png"
                          alt="img"
                        />
                        <a
                          href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                          className="video-btn ripple video-popup"
                        >
                          <i className="fa-solid fa-play" />
                        </a>
                        <div className="gt-ratting-content">
                          <p>1200+ Clients Rating.</p>
                          <div className="gt-star">
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Instagram Section Start */}
            <div className="instagram-section-3 fix section-padding pt-0">
              <div className="swiper instagram-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="instagram-image">
                      <img
                        src="assets/img/home-5/instagram/instagram-01.jpg"
                        alt="img"
                      />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="instagram-image">
                      <img
                        src="assets/img/home-5/instagram/instagram-02.jpg"
                        alt="img"
                      />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="instagram-image">
                      <img
                        src="assets/img/home-5/instagram/instagram-03.jpg"
                        alt="img"
                      />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="instagram-image">
                      <img
                        src="assets/img/home-5/instagram/instagram-04.jpg"
                        alt="img"
                      />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="instagram-image">
                      <img
                        src="assets/img/home-5/instagram/instagram-05.jpg"
                        alt="img"
                      />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="instagram-image">
                      <img
                        src="assets/img/home-5/instagram/instagram-06.jpg"
                        alt="img"
                      />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="instagram-image">
                      <img
                        src="assets/img/home-5/instagram/instagram-07.jpg"
                        alt="img"
                      />
                      <a href="index.html" className="icon">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* GT Brand Section Start */}
            <div className="brand-section fix">
              <div className="container">
                <div className="swiper brand-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="brand-box">
                        <div className="brand-image-5 text-center">
                          <img
                            src="assets/img/home-5/brand/b-1.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-box">
                        <div className="brand-image-5 text-center">
                          <img
                            src="assets/img/home-5/brand/b-2.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-box">
                        <div className="brand-image-5 text-center">
                          <img
                            src="assets/img/home-5/brand/b-3.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-box">
                        <div className="brand-image-5 text-center">
                          <img
                            src="assets/img/home-5/brand/b-4.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-box">
                        <div className="brand-image-5 text-center">
                          <img
                            src="assets/img/home-5/brand/b-5.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-box">
                        <div className="brand-image-5 text-center">
                          <img
                            src="assets/img/home-5/brand/b-6.png"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cta Section Start */}
            <section className="cta-contact-section section-padding pb-0">
              <div className="container">
                <div className="cta-wrapper">
                  <div className="content wow fadeInUp" data-wow-delay=".3s">
                    <p>Pull the Trigger!</p>
                    <h3>
                      Let’s Bring Your <br />
                      Vision To Life
                    </h3>
                  </div>
                  <div className="cta-image wow fadeInUp" data-wow-delay=".5s">
                    <img src="assets/img/home-1/cta-img.png" alt="img" />
                  </div>
                  <div
                    className="contact-right wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="contact-info">
                      <h3>call us</h3>
                      <p>
                        <a href="tel:+919876543210">+91 98765 43210</a>
                      </p>
                    </div>
                    <Link to={"/contact"} className="theme-btn">
                      get started
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
