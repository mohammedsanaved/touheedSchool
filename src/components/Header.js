import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import { Styles } from "./styles/header.js";

const Header = () => {
  return (
    <Styles>
      {/* Topbar */}
      <section className="top-bar">
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="bar-left">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <i className="las la-map-marker"></i>Alert:
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="10" md="10">
              <div className="bar-right d-flex justify-content-end alert-right">
                <div className="alert-area">
                  <marquee
                    className=""
                    onmouseover="this.stop();"
                    onmouseout="this.start();"
                  >
                    <a className="xatext">
                      "Preparatory holidays for examinations of first semester
                      UG & PG programs shall be from 19 to 24 July 2021"{" "}
                    </a>
                    <a className="xatext">
                      "Guidelines for students appearing for Semester End
                      Offline Examinations UG/PG July - September 2021"{" "}
                    </a>
                  </marquee>
                </div>

                {/* <ul className="list-unstyled list-inline bar-social">
                                    <li className="list-inline-item">
                                        xxx
                                    </li>
                                </ul> */}

                {/* <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>

                                    </ul>
                                    
                                    <ul className="list-unstyled list-inline bar-login">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}><i className="las la-user"></i>Log In</Link></li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-user-edit"></i>Register</Link></li>
                                    </ul> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Logo Area */}
      <section className="logo-area">
        <Container>
          <Row>
            <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                    alt=""
                    width="171"
                    height="41"
                  />
                </Link>
              </div>
            </Col>
            <Col md="9">
              <div className="logo-contact-box d-flex justify-content-end">
                <div className="emcontact-box d-flex">
                  <div className="box-icon">
                    <i className="flaticon-phone-call"></i>
                  </div>
                  <div className="box-content">
                    <p>Call Us Now</p>
                    <span>(999) 999 9999</span>
                  </div>
                </div>
                <div className="emcontact-box d-flex">
                  <div className="box-icon">
                    <i className="flaticon-envelope"></i>
                  </div>
                  <div className="box-content">
                    <p>Enquery Us</p>
                    <span>info@touheed.education</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <Link to={process.env.PUBLIC_URL + "/registration"}>
                    <i className="las la-clipboard-list"></i>Apply Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Navbar */}
      <section className="main-menu">
        <Container>
          <Row>
            <Col md="12">
              <div className="main-menu-box">
                <div className="menu-box d-flex justify-content-between">
                  <ul className="nav menu-nav">
                    {/* <li className="nav-item dropdown active">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li>
                                                </ul>
                                            </li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        Home<i className="las"></i>
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        About Us <i className="las la-angle-down"></i>
                      </Link>
                      <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/about"}
                          >
                            Overview
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/management"}
                          >
                            Board of Management
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        Admissions<i className="las la-angle-down"></i>
                      </Link>
                      <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-grid"}
                          >
                            Programs Offered
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-list"}
                          >
                            Contact Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-details"}
                          >
                            Brochure
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-details"}
                          >
                            Scholarship Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        Activites <i className="las la-angle-down"></i>
                      </Link>
                      <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/events"}
                          >
                            Events
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/contact"}
                        data-toggle="dropdown"
                      >
                        Contact Us<i className="las"></i>
                      </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Event <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/events"}>Events</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/event-details"}>Event Details</Link></li>
                                                </ul>
                                            </li> */}
                    {/* <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Blog <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>Blog Classic</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>Blog Grid</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>Blog Details</Link></li>
                                                </ul>
                                            </li> */}
                    {/* <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Shop <i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/product-details"}>Product Details</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/cart"}>Cart</Link></li>
                                                </ul>
                                            </li> */}
                  </ul>
                  <ul className="nav search-cart-bar">
                    <li className="nav-item search-box">
                      <Search />
                    </li>
                    <li className="nav-item cart-box">
                      <Link
                        to={process.env.PUBLIC_URL + "/cart"}
                        className="nav-link nav-cart"
                      >
                        <i className="las la-shopping-bag"></i>
                      </Link>
                    </li>
                    <li className="nav-item side-box">
                      <Sidebar />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sticky Menu */}
      <StickyMenu />

      {/* Mobile Menu */}
      <MobileMenu />
    </Styles>
  );
};

export default Header;
