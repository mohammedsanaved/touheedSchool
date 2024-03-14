import React, { useState, useEffect } from "react";
import Datas from "../../data/event/events.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
// import { BreadcrumbBox } from "../../components/common/BreadcrumbBox.js";
import Pagination from "../../components/Pagination";
import CourseSidebar from "../courses/components/CourseSidebar";
import FooterTwo from "../../components/FooterTwo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Styles } from "./styles/event.js";

import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/eventActions";
import ReactHtmlParser from "react-html-parser";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function Events({ history }) {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  console.log(eventList, "changes in eventList");
  const { error, loading, event, page, pages } = eventList;
  console.log("eventList : ", eventList);

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listEvent(keyword));
  }, [dispatch, keyword]);

  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper event-page">
        {/* Header 2 */}
        {/* < Header /> */}
        <HeaderTwo />

        {/* Breadcroumb */}
        {/* <BreadcrumbBox title="Events" /> */}
        <div>Events</div>

        {/* Events Area */}
        <section className="event-page-area">
          <Container>
            <Row>
              <Col lg="9" md="12">
                {loading ? (
                  <Loader />
                ) : error ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  event.map((data, i) => (
                    <div className="event-box" key={i}>
                      <Row>
                        <Col xl="3" lg="4" md="0">
                          <div className="event-img">
                            {/* <Link to={process.env.PUBLIC_URL +`/event-details/${data.id}/`}><img src={process.env.PUBLIC_URL + `/assets/images/blog-4.jpeg`} alt="" className="img-fluid" /></Link> */}
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/event-details/${data.id}/`
                              }
                            >
                              <img
                                src={
                                  process.env.REACT_APP_API_URL +
                                  data.event_image
                                }
                                alt=""
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                        </Col>
                        <Col xl="9" lg="8" md="12">
                          <div className="event-content">
                            <div className="content-box">
                              <Row>
                                <Col md="9">
                                  <div className="event-title">
                                    <h6>
                                      <Link
                                        to={
                                          process.env.PUBLIC_URL +
                                          `/event-details/${data.id}/`
                                        }
                                      >
                                        {data.event_title}
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="event-time-location">
                                    <ul className="list-unstyled list-inline">
                                      <li className="list-inline-item">
                                        <i className="las la-clock"></i>{" "}
                                        {data.time}
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="las la-map-marker"></i>{" "}
                                        {data.event_location}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="event-desc substring">
                                    <p>
                                      {ReactHtmlParser(data.short_description)}
                                    </p>
                                    {/* <p>The tri-color was unfurled by the Chief Guest Mr. Mohammad Meeran Shahbuddin, at the school grounds.</p> */}
                                  </div>
                                </Col>
                                <Col md="3" className="text-center">
                                  <div className="event-date">
                                    <p>{data.date}</p>
                                  </div>
                                  <div className="join-btn">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL +
                                        `/event-details/${data.id}/`
                                      }
                                    >
                                      Details
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))
                )}

                <Col md="12" className="text-center">
                  <Pagination page={page} pages={pages} keyword={keyword} />
                </Col>
              </Col>

              <Col lg="3" md="0">
                {/* <CourseSidebar /> */}
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer 2 */}
        {/* <FooterTwo /> */}
        <Footer event={event} />
      </div>
    </Styles>
  );
}

export default Events;
