import React from "react";
import Footer from "../Common/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../utils/AxiosConfig";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

function Contact() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const InquiriesSubmit = async (formData) => {
    let response = await api.post("/user/inquiries/submit", formData);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: InquiriesSubmit,

    onSuccess: () => {
      toast.success("Message Sent Successfully", {
        onClose: () => {
          navigate("/");
        },
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const hadleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

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
                      Contact Us
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
                      <Link to="/">home :</Link>
                    </li>
                    <li className="color">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* GT Error Section Start */}
            <section className="gt-contact-us-section section-padding fix">
              <div className="container">
                <div className="gt-contact-us-wrapper">
                  <div className="row g-4">
                    <div className="col-lg-8">
                      <div className="gt-comment-form-wrap">
                        <h4>We're Here to Help!</h4>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <form
                          action="https://ex-coders.com/html/pubzi/contact.php"
                          id="contact-form"
                          onSubmit={hadleSubmit}
                        >
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <span>Your Name</span>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  placeholder="Your Name"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <span>Your Email</span>
                                <input
                                  type="text"
                                  name="email"
                                  id="email6"
                                  placeholder="Your Email"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-clt">
                                <span>Subject</span>
                                <input
                                  type="text"
                                  name="subject"
                                  id="email6"
                                  placeholder="Your Subject"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-clt">
                                <span>write message</span>
                                <textarea
                                  name="message"
                                  id="message"
                                  placeholder="Type your message"
                                  defaultValue={""}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <button
                                type="submit"
                                className="theme-btn boder-10"
                              >
                                {mutation.isPending
                                  ? "Sending..."
                                  : "Send Message"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="gt-contact-bg bg-cover"
                        style={{
                          backgroundImage:
                            "url(assets/img/inner-page/match-details/bg.jpg)",
                        }}
                      >
                        <div className="gt-contact-content">
                          <h3>Need Any Help</h3>
                          <p>Nees Any Help, Call Us 24/7 Full Support</p>
                          <div className="gt-contact-item">
                            <div className="gt-icon">
                              <i className="fa-solid fa-phone" />
                            </div>
                            <ul className="gt-list">
                              <li>
                                <span>Call Us:</span>
                              </li>
                              <li>
                                <a href="tel:+919876543210">+91 98765 43210</a>
                              </li>
                            </ul>
                          </div>
                          <div className="gt-contact-item">
                            <div className="gt-icon">
                              <i className="fa-regular fa-envelope" />
                            </div>
                            <ul className="gt-list">
                              <li>
                                <span>Mail Us</span>
                              </li>
                              <li>
                                <a href="mailto:support@gamershub.in">
                                  support@gamershub.in
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="gt-contact-item mb-0">
                            <div className="gt-icon">
                              <i className="fa-solid fa-location-dot" />
                            </div>
                            <ul className="gt-list">
                              <li>
                                <span>Location:</span>
                              </li>
                              <li>Ahmedabad, Gujarat, India</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gt-bg-image">
                        <img
                          src="assets/img/inner-page/contact-bg.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* GT Map Section Start */}
            <div className="gt-map-section fix">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="gt-map-items">
                      <div className="googpemap">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790405!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1776749989684!5m2!1sen!2sin"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                        />
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
            {/* Footer Section Start */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
