import React from "react";
import { Styles } from "./styles/eventDetails.js";
import HeaderTwo from "../../components/HeaderTwo.js";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import { Container, Row, Col } from "react-bootstrap";
import DemoCarousel from "../../components/EventCarousel.jsx";
import EventDetailsData from "../../components/EventDetailsData.jsx";
import EventSpeakers from "../../components/EventSpeakers.jsx";
import Footer from "../../components/Footer.js";

const EventsDetails = () => {
  const bg =
    "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww";
  return (
    <Styles>
      <div className="main-wrapper event-details-page mb-5">
        <HeaderTwo />
        <BannerSection bg_image={bg} title={"Home/EventsDetails"} />
        <Container>
          <Row className="mt-5 d-flex justify-content-around gap-4">
            <Col>
              <DemoCarousel />
            </Col>
            <Col>
              <EventDetailsData />
            </Col>
          </Row>
          <Row>
            <EventSpeakers />
          </Row>
        </Container>
      </div>
      <Footer />
    </Styles>
  );
};

export default EventsDetails;
