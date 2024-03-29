import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import { Styles } from "./styles/headerTwo.js";
import logo from "../assets/logo.jpeg";

const HeaderTwo = () => {
  return (
    <Styles>
      {/* Topbar 2 */}
      {/* <section className="top-bar2">
        <Container>
          <Row>
            <Col lg="7" md="9">
              <div className="bar-left">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <i className="las la-phone"></i>+1 (999) 999 9999
                  </li>
                  <li className="list-inline-item">
                    <i className="las la-envelope"></i>info@touheed.education
                  </li>
                  <li className="list-inline-item">
                    <i className="las la-map-marker"></i>Gangolli, Karnataka,
                    India.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="5" md="3">
              <div className="bar-right d-flex justify-content-end">
                <ul className="list-unstyled list-inline bar-lang">
                  <li className="list-inline-item">
                    <Dropdown>
                      <Dropdown.Toggle>
                        <img
                          src={process.env.PUBLIC_URL + "/assets/images/us.png"}
                          alt=""
                        />
                        English<i className="las la-angle-down"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu as="ul">
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/us.png"
                            }
                            alt=""
                          />{" "}
                          English
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/fra.png"
                            }
                            alt=""
                          />{" "}
                          French
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/ger.png"
                            }
                            alt=""
                          />{" "}
                          German
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/spa.png"
                            }
                            alt=""
                          />{" "}
                          Spanish
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/bra.png"
                            }
                            alt=""
                          />{" "}
                          Brazilian
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline bar-social">
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>

                <ul className="list-unstyled list-inline sidebar-button">
                  <li className="list-inline-item nav-item side-box">
                    <Sidebar />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Logo Area 2 */}
      <section className="logo-area2">
        <Container>
          <Row>
            <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    // src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                    src={logo}
                    alt=""
                    width="171"
                    height="41"
                  />
                </Link>
              </div>
            </Col>
            <Col md="9">
              <div className="menu-box d-flex justify-content-end">
                <ul className="nav menu-nav">
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
                </ul>
                <div className="search-box">
                  <Search />
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

      {/* Sticky Menu */}
      <StickyMenu />

      {/* Mobile Menu */}
      <MobileMenu />
    </Styles>
  );
};

export default HeaderTwo;
