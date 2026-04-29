import Footer from "../Common/Footer";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import api from "../utils/AxiosConfig";

function Home() {
  const {
    data: feedback,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const response = await api.get("/user/feedback/getfeedback");
      return response.data.data;
    },
  });
  const navigate = useNavigate();
  const { data } = ({
    queryKey: ["game"],
    queryFn: async () => {
      const response = await api.get("/user/game/allgame");

      console.log(response.data);

      return response.data.data;
    },
  });
  return (
    <>
      <div>
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
            {/* Hero Section Start */}
            <section
              className="hero-section hero-2 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/home-2/hero/hero-bg.jpg")',
              }}
            >
              <div className="top-shape">
                <img src="assets/img/home-2/hero/left-shape.png" alt="img" />
              </div>
              <div className="top-line">
                <img src="assets/img/home-2/hero/top-line.png" alt="img" />
              </div>
              <div className="bottom-shape">
                <img src="assets/img/home-2/hero/bottom-shape.png" alt="img" />
              </div>
              <div className="left-shape float-bob-y">
                <img src="assets/img/home-2/hero/left-2.png" alt="img" />
              </div>
              <div className="right-shape">
                <img src="assets/img/home-2/hero/right-shape.png" alt="img" />
              </div>
              <div className="right-shape2 float-bob-y">
                <img src="assets/img/home-2/hero/right-shape2.png" alt="img" />
              </div>
              <div className="game-controll float-bob-x">
                <img src="assets/img/home-2/hero/game-controll.png" alt />
              </div>
              <div className="game-controll-bg">
                <img
                  src="assets/img/home-2/hero/game-controll-bg.png"
                  alt="img"
                />
              </div>
              <div className="right-shape-3">
                <img src="assets/img/home-2/hero/shape-5.png" alt="img" />
              </div>
              <div className="blur-shape">
                <img src="assets/img/home-2/hero/blur.png" alt="img" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-content">
                      <span className="sub-title subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">
                        your future ultimate gaming world . .
                      </span>
                      <h1 className="hero_title tv_hero_title hero_title_1">
                        gaming vibe <span>Legends</span>
                      </h1>
                      <div className="hero-sub-content">
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                          A game studio crafting exciting, high-quality video
                          games, prioritizing immersive gameplay and mechanics.
                        </p>
                        <Link
                          to={"/"}
                          className="theme-btn style-2 wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <span className="left-line" />
                          know more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M9.41099 8.46917L1.88219 16L0 14.1166L7.53013 6.58846L0.941096 0H16V15.0576L9.41099 8.46917Z"
                              fill="#0B0E13"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hero-image wow bounceInRight"
                data-wow-delay="700ms"
                data-wow-duration="1000ms"
              >
                <img src="assets/img/home-2/hero/hero1.png" alt="img" />
              </div>
            </section>
            {/* Brand Section Start */}
            <div className="brand-section-2 section-padding fix">
              <div className="container">
                <div className="swiper brand-slider-2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="brand-image-2">
                        <img
                          src="assets/img/home-2/brand/brand-01.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image-2">
                        <img
                          src="assets/img/home-2/brand/brand-02.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image-2">
                        <img
                          src="assets/img/home-2/brand/brand-03.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image-2">
                        <img
                          src="assets/img/home-2/brand/brand-04.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image-2">
                        <img
                          src="assets/img/home-2/brand/brand-05.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image-2">
                        <img
                          src="assets/img/home-2/brand/brand-06.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image-2">
                        <img
                          src="assets/img/home-2/brand/brand-07.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About Section Start */}
            <section className="about-section-2 section-padding pt-0 fix">
              <div className="about-shape-1">
                <img
                  src="assets/img/home-2/about/about-shape-1.png"
                  alt="img"
                />
              </div>
              {/* Game Listing Section */}
              <h2 className="text-center">🔥 Featured Games</h2>
              <section className="section-padding fix">
                <Container>
                  <Row>
                    {data?.slice(0, 3).map((game) => (
                      <Col lg={4} md={6} key={game.id} className="mb-4">
                        <Card className="bg-dark text-white border-0 h-100 shadow">
                          <Card.Img variant="top" src={game.image} />

                          <Card.Body className="text-center d-flex flex-column">
                            <Card.Title>{game.name}</Card.Title>

                            <Button
                              variant="outline-warning"
                              className="mt-auto fw-semibold"
                              onClick={() => navigate(`/game`)}
                            >
                              View All Games
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>

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
                          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">
                            about our gaming zone
                          </h6>
                          <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
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
                            <p>WINING GAME</p>
                          </div>
                        </div>
                        <Link
                          to={"/about"}
                          className="theme-btn style-2 wow fadeInUp"
                          data-wow-delay=".9s"
                        >
                          <span className="left-line" />
                          About More Us
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M9.41099 8.46917L1.88219 16L0 14.1166L7.53013 6.58846L0.941096 0H16V15.0576L9.41099 8.46917Z"
                              fill="#0B0E13"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Trending Match Section Start */}
            <section className="trending-match-section gt-project-area fix section-padding pt-0">
              <div className="left-shape float-bob-y1">
                <img src="assets/img/home-2/match/left-shape.png" alt="img" />
              </div>
              <div className="right-shape">
                <img src="assets/img/home-2/match/right-shape.png" alt="img" />
              </div>
              <div className="container">
                <div className="section-title-2 text-center">
                  <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">
                    top trending matches
                  </h6>
                  <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                    Upcoming Trending Matches
                  </h2>
                </div>
                <div className="trending-match-wrapper">
                  <div className="vec-arrow">
                    <img
                      src="assets/img/home-2/match/vec-arrow.png"
                      alt="img"
                    />
                  </div>
                  <div className="linear-shape">
                    <img
                      src="assets/img/home-2/match/linear-bg-1.png"
                      alt="img"
                    />
                  </div>
                  <div className="linear-shape-2">
                    <img
                      src="assets/img/home-2/match/linear-bg-2.png"
                      alt="img"
                    />
                  </div>
                  <div className="trending-match-items gt-project-panel">
                    <div className="trending-match-left">
                      <div className="gt-match-logo">
                        <img
                          src="assets/img/home-2/match/match-01.jpg"
                          alt="img"
                          className="gt-match-thumb"
                        />
                        <img src="assets/img/home-2/match/vs.png" alt="img" />
                        <img
                          src="assets/img/home-2/match/match-02.jpg"
                          alt="img"
                          className="gt-match-thumb"
                        />
                      </div>
                      <div className="gt-watch-now-items">
                        <span>Watch live on</span>
                        <ul className="gt-watch-now-list">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube" /> you tube
                            </a>
                            <a href="#">
                              <i className="fa-brands fa-discord" />
                              discord
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitch" />
                              twitch
                            </a>
                            <a href="#">
                              <i className="fa-solid fa-eyes" />
                              GeForce
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="trending-match-content">
                      <ul className="gt-date-list">
                        <li>
                          <i className="fa-light fa-calendar" />
                          30 May, 2025
                        </li>
                        <li>
                          <i className="fa-regular fa-clock" />
                          10:00 am - 12:30 pm
                        </li>
                      </ul>
                      <h3>
                        <a href="match-details.html">
                          Aggressive &amp; War-Themed
                        </a>
                      </h3>
                      <p>
                        A game studio crafting exciting, high-quality video
                        immersive gameplay and mechanics.
                      </p>
                    </div>
                  </div>
                  <div className="trending-match-items gt-project-panel">
                    <div className="trending-match-content">
                      <ul className="gt-date-list">
                        <li>
                          <i className="fa-light fa-calendar" />
                          30 May, 2025
                        </li>
                        <li>
                          <i className="fa-regular fa-clock" />
                          10:00 am - 12:30 pm
                        </li>
                      </ul>
                      <h3>
                        <a href="match-details.html">The Cognitive Crusade</a>
                      </h3>
                      <p>
                        A game studio crafting exciting, high-quality video
                        immersive gameplay and mechanics.
                      </p>
                    </div>
                    <div className="trending-match-left">
                      <div className="gt-match-logo">
                        <img
                          src="assets/img/home-2/match/match-03.jpg"
                          alt="img"
                          className="gt-match-thumb"
                        />
                        <img src="assets/img/home-2/match/vs.png" alt="img" />
                        <img
                          src="assets/img/home-2/match/match-04.jpg"
                          alt="img"
                          className="gt-match-thumb"
                        />
                      </div>
                      <div className="gt-watch-now-items">
                        <span>Watch live on</span>
                        <ul className="gt-watch-now-list">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube" /> you tube
                            </a>
                            <a href="#">
                              <i className="fa-brands fa-discord" />
                              discord
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitch" />
                              twitch
                            </a>
                            <a href="#">
                              <i className="fa-solid fa-eyes" />
                              GeForce
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="trending-match-items bb-none gt-project-panel">
                    <div className="trending-match-left">
                      <div className="gt-match-logo">
                        <img
                          src="assets/img/home-2/match/match-01.jpg"
                          alt="img"
                          className="gt-match-thumb"
                        />
                        <img src="assets/img/home-2/match/vs.png" alt="img" />
                        <img
                          src="assets/img/home-2/match/match-02.jpg"
                          alt="img"
                          className="gt-match-thumb"
                        />
                      </div>
                      <div className="gt-watch-now-items">
                        <span>Watch live on</span>
                        <ul className="gt-watch-now-list">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube" /> you tube
                            </a>
                            <a href="#">
                              <i className="fa-brands fa-discord" />
                              discord
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitch" />
                              twitch
                            </a>
                            <a href="#">
                              <i className="fa-solid fa-eyes" />
                              GeForce
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="trending-match-content">
                      <ul className="gt-date-list">
                        <li>
                          <i className="fa-light fa-calendar" />
                          30 May, 2025
                        </li>
                        <li>
                          <i className="fa-regular fa-clock" />
                          10:00 am - 12:30 pm
                        </li>
                      </ul>
                      <h3>
                        <a href="match-details.html">The Machine Uprising</a>
                      </h3>
                      <p>
                        A game studio crafting exciting, high-quality video
                        immersive gameplay and mechanics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Testimonial Section Start */}
            <section className="testimonial-section-2 section-padding pt-0">
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-xl-6">
                    <div className="testimonial-box-items-2">
                      <div className="border-shape">
                        <img src="assets/img/home-2/border-shape.png" alt />
                      </div>
                      <div className="swiper tetsimonial-slider-2">
                        <div className="swiper-wrapper">
                          {feedback?.map((item, index) => {
                            return (
                              <div className="swiper-slide">
                                <div className="testimonial-box-slider">
                                  <div className="quote-icon">
                                    <img
                                      src="assets/img/home-2/quote.png"
                                      alt="quote"
                                    />
                                  </div>

                                  <p>
                                    {item.message || "No feedback available"}
                                  </p>

                                  <div className="client-info-items">
                                    <div className="client-info">
                                      <img
                                        src={`https://ui-avatars.com/api/?name=${item.username}&background=c5a059&color=fff`}
                                        alt="User"
                                        style={{
                                          borderRadius: "30px",
                                          height: "50px",
                                        }}
                                      />

                                      <div className="content">
                                        <h4>{item.username || "Anonymous"}</h4>
                                        <span>{item.role || "User"}</span>
                                      </div>
                                    </div>

                                    <div className="star">
                                      {[...Array(item.rating || 5)].map(
                                        (_, i) => (
                                          <i
                                            key={i}
                                            className="fa-solid fa-star"
                                          />
                                        ),
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="testi-pagi">
                        <div className="array-button d-flex align-items-center">
                          <button className="array-prev">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_0_434)">
                                <path
                                  d="M1.16006 18L14.762 18C15.4019 18 15.9222 17.4797 15.9222 16.8398C15.9222 16.2 15.4019 15.6797 14.762 15.6797L3.96553 15.6797L17.6589 1.98281C18.1124 1.5293 18.1124 0.794531 17.6589 0.341017C17.2054 -0.112499 16.4706 -0.112499 16.0171 0.341017L2.32373 14.0379L2.32373 3.24141C2.32373 2.60156 1.80342 2.08125 1.16357 2.08125C0.52373 2.08125 0.00341662 2.60156 0.00341668 3.24141L0.00341787 16.8398C-9.73203e-05 17.4797 0.520214 18 1.16006 18Z"
                                  fill="#0B0E13"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_0_434">
                                  <rect
                                    width={18}
                                    height={18}
                                    fill="white"
                                    transform="translate(18 18) rotate(180)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                          <button className="array-next">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_0_427)">
                                <path
                                  d="M16.8399 0H3.23799C2.59814 0 2.07783 0.520312 2.07783 1.16016C2.07783 1.8 2.59814 2.32031 3.23799 2.32031H14.0345L0.341113 16.0172C-0.112402 16.4707 -0.112402 17.2055 0.341113 17.659C0.794629 18.1125 1.52939 18.1125 1.98291 17.659L15.6763 3.96211V14.7586C15.6763 15.3984 16.1966 15.9187 16.8364 15.9187C17.4763 15.9187 17.9966 15.3984 17.9966 14.7586V1.16016C18.0001 0.520312 17.4798 0 16.8399 0Z"
                                  fill="#0B0E13"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_0_427">
                                  <rect width={18} height={18} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                        <div className="testimonial-pagination">
                          <span className="current">01</span>/
                          <span className="total">0{feedback?.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="testimonial-right-items">
                      <div className="section-title mb-4">
                        <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">
                          our testimonials
                        </h6>
                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                          Peoples Talk About Us
                        </h2>
                      </div>
                      <div className="row g-4 mt-3">
                        <div
                          className="col-lg-6 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="testimonial-image-1">
                            <div className="overlay-style" />
                            <img
                              src="assets/img/home-2/testi-1.jpg"
                              alt="img"
                            />
                            <div className="testimonial-counter">
                              <img
                                src="assets/img/home-2/testi-count.png"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-6 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <div className="testimonial-image-1">
                            <img
                              src="assets/img/home-2/testi-2.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Marque Section Start */}
            <div className="marque-section section-padding fix pt-0">
              <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                  <ul className="marqee-list d-flex">
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-1.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-2.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-3.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-4.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-5.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-6.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-7.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-8.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-9.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-10.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-11.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-12.jpg"
                          alt
                        />
                      </span>
                    </li>
                  </ul>
                  <ul className="marqee-list d-flex">
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-1.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-2.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-3.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-4.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-5.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-6.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-7.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-8.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-9.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-10.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-11.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-12.jpg"
                          alt
                        />
                      </span>
                    </li>
                  </ul>
                  <ul className="marqee-list d-flex">
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-1.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-2.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-3.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-4.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-5.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-6.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-7.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-8.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-9.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-10.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-11.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-12.jpg"
                          alt
                        />
                      </span>
                    </li>
                  </ul>
                  <ul className="marqee-list d-flex">
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-1.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-2.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-3.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-4.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-5.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-6.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-7.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-8.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-9.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-10.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-11.jpg"
                          alt
                        />
                      </span>
                    </li>
                    <li className="marquee-item">
                      <span className="text-slider">
                        <img
                          src="assets/img/home-1/gaming-logo/logo-12.jpg"
                          alt
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Team Section Start */}
            <section className="team-section-2 fix section-padding pt-0">
              <div className="team-shape">
                <img src="assets/img/home-2/team/team-shape.png" alt="img" />
              </div>
              <div className="container">
                <div className="section-title-2 text-center">
                  <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">
                    team members
                  </h6>
                  <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                    Our Team Player
                  </h2>
                </div>
                <div className="swiper team-slider-2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="team-single-style-2">
                        <div className="team-bg">
                          <img
                            src="assets/img/home-2/team/team-bg.png"
                            alt="img"
                          />
                        </div>
                        <div className="social-icon align-items-center">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="thumb">
                          <img
                            src="assets/img/home-2/team/team-01.png"
                            alt="img"
                          />
                          <div className="team-content">
                            <h3>
                              <a href="team-details.html">Jammey hanson</a>
                            </h3>
                            <p>Game artist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="team-single-style-2">
                        <div className="team-bg">
                          <img
                            src="assets/img/home-2/team/team-bg.png"
                            alt="img"
                          />
                        </div>
                        <div className="social-icon align-items-center">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="thumb">
                          <img
                            src="assets/img/home-2/team/team-02.png"
                            alt="img"
                          />
                          <div className="team-content">
                            <h3>
                              <a href="team-details.html">Jammey hanson</a>
                            </h3>
                            <p>Game artist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="team-single-style-2">
                        <div className="team-bg">
                          <img
                            src="assets/img/home-2/team/team-bg.png"
                            alt="img"
                          />
                        </div>
                        <div className="social-icon align-items-center">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="thumb">
                          <img
                            src="assets/img/home-2/team/team-03.png"
                            alt="img"
                          />
                          <div className="team-content">
                            <h3>
                              <a href="team-details.html">Jammey hanson</a>
                            </h3>
                            <p>Game artist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="team-single-style-2">
                        <div className="team-bg">
                          <img
                            src="assets/img/home-2/team/team-bg.png"
                            alt="img"
                          />
                        </div>
                        <div className="social-icon align-items-center">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="thumb">
                          <img
                            src="assets/img/home-2/team/team-04.png"
                            alt="img"
                          />
                          <div className="team-content">
                            <h3>
                              <a href="team-details.html">Jammey hanson</a>
                            </h3>
                            <p>Game artist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="array-button d-grid align-items-center">
                <button className="array-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_46_137)">
                      <path
                        d="M0.499999 1.16006L0.5 14.762C0.5 15.4019 1.02031 15.9222 1.66016 15.9222C2.3 15.9222 2.82031 15.4019 2.82031 14.762L2.82031 3.96553L16.5172 17.6589C16.9707 18.1124 17.7055 18.1124 18.159 17.6589C18.6125 17.2054 18.6125 16.4706 18.159 16.0171L4.46211 2.32373L15.2586 2.32373C15.8984 2.32373 16.4187 1.80342 16.4187 1.16357C16.4187 0.523731 15.8984 0.0034173 15.2586 0.00341732L1.66016 0.00341792C1.02031 -9.72975e-05 0.499999 0.520214 0.499999 1.16006Z"
                        fill="#0B0E13"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_137">
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(0.5 18) rotate(-90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="array-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={18}
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_46_130)">
                      <path
                        d="M18.5 16.8399L18.5 3.23799C18.5 2.59814 17.9797 2.07783 17.3398 2.07783C16.7 2.07783 16.1797 2.59814 16.1797 3.23799L16.1797 14.0345L2.48281 0.341113C2.0293 -0.112403 1.29453 -0.112403 0.841017 0.341112C0.387501 0.794628 0.387501 1.52939 0.841017 1.98291L14.5379 15.6763L3.74141 15.6763C3.10156 15.6763 2.58125 16.1966 2.58125 16.8364C2.58125 17.4763 3.10156 17.9966 3.74141 17.9966L17.3398 17.9966C17.9797 18.0001 18.5 17.4798 18.5 16.8399Z"
                        fill="#0B0E13"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_130">
                        <rect
                          width={18}
                          height={18}
                          fill="white"
                          transform="translate(18.5) rotate(90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </section>
            {/* news Section Start */}
            <section className="news-section-2 section-padding">
              <div className="game-controll-shape">
                <img src="assets/img/home-2/news/game-controll-shape.png" alt />
              </div>
              <div className="container">
                <div className="section-title">
                  <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">
                    latest news
                  </h6>
                  <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                    our latest news &amp; Blog Archive
                  </h2>
                </div>
                <div className="news-wrapper">
                  <div className="row g-4 align-items-center">
                    <div className="col-xl-6">
                      <div className="news-left-items">
                        <div className="row g-4">
                          <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="news-box-items mt-0">
                              <div className="content">
                                <h3>
                                  <a href="news-details.html">
                                    The Rise of Online Gaming in the Age of AI
                                  </a>
                                </h3>
                                <span className="gt-date">
                                  <i className="fa-solid fa-calendar-days" /> 1
                                  Feb 2025
                                </span>
                              </div>
                              <div className="thumb style-2">
                                <img
                                  src="assets/img/home-2/news/news-01.jpg"
                                  alt="img"
                                />
                                <img
                                  src="assets/img/home-2/news/news-01.jpg"
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="news-box-items mt-0">
                              <div className="thumb">
                                <img
                                  src="assets/img/home-2/news/news-02.jpg"
                                  alt="img"
                                />
                                <img
                                  src="assets/img/home-2/news/news-02.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="content">
                                <h3>
                                  <a href="news-details.html">
                                    The evolution of online gaming and its rise
                                  </a>
                                </h3>
                                <span className="gt-date">
                                  <i className="fa-solid fa-calendar-days" /> 11
                                  March 2025
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div className="news-box-items mt-0">
                              <div className="content">
                                <h3>
                                  <a href="news-details.html">
                                    The Rise of Online Gaming in the Age of AI
                                  </a>
                                </h3>
                                <span className="gt-date">
                                  <i className="fa-solid fa-calendar-days" /> 7
                                  April 2025
                                </span>
                              </div>
                              <div className="thumb style-2">
                                <img
                                  src="assets/img/home-2/news/news-03.jpg"
                                  alt="img"
                                />
                                <img
                                  src="assets/img/home-2/news/news-03.jpg"
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <div className="news-box-items mt-0">
                              <div className="thumb">
                                <img
                                  src="assets/img/home-2/news/news-04.jpg"
                                  alt="img"
                                />
                                <img
                                  src="assets/img/home-2/news/news-04.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="content">
                                <h3>
                                  <a href="news-details.html">
                                    The evolution of online gaming and its rise
                                  </a>
                                </h3>
                                <span className="gt-date">
                                  <i className="fa-solid fa-calendar-days" /> 15
                                  May 2025
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">  
                      <div className="news-right-items">
                        <div className="section-title mb-0">
                          <h6 className="subtitle tz-sub-tilte tz-sub-anim  text-uppercase tx-subTitle">
                            latest news
                          </h6>
                          <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                            our latest news &amp; Blog Archive
                          </h2>
                        </div>
                        <p
                          className="news-text wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          Emerging trends in the esports industry include the
                          growth of mobile esports, the integration of virtual
                          reality in gaming experiences, and the increasing
                          involvement of traditional sports.
                        </p>
                        <Link
                          to={"/about"}
                          className="theme-btn style-2 wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <span className="left-line" />
                          view all news
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M9.41099 8.46917L1.88219 16L0 14.1166L7.53013 6.58846L0.941096 0H16V15.0576L9.41099 8.46917Z"
                              fill="#0B0E13"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Newsletter Section Start */}
            <section className="gt-newsletter-section fix">
              <div className="container">
                <div
                  className="gt-newsletter-wrapper bg-cover"
                  style={{
                    backgroundImage: "url(assets/img/home-2/newsletter-bg.jpg)",
                  }}
                >
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Sign Up Today To Get The Latest <br />
                    Inspiration &amp; Insights
                  </h4>
                  <form action="#">
                    <div className="form-clt">
                      <img
                        src="assets/img/home-3/icon/10.svg"
                        alt="img"
                        className="input-icon"
                      />
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="enter your email"
                      />
                      <button  className="theme-btn">
                        subscribe now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            {/* GT Footer Section Start */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
