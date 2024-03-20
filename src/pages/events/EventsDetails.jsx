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
  return (
    <Styles>
      <div className="main-wrapper event-details-page mb-5">
        <HeaderTwo />
        <BannerSection />
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
