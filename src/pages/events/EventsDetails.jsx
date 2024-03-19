import React from "react";
import { Styles } from "./styles/eventDetails.js";
import HeaderTwo from "../../components/HeaderTwo.js";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import { Container, Row, Col } from "react-bootstrap";
import DemoCarousel from "../../components/EventCarousel.jsx";
import EventDetailsData from "../../components/EventDetailsData.jsx";

const EventsDetails = () => {
  return (
    <Styles>
      <div className="main-wrapper event-details-page">
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
          <Row>Events Speakers</Row>
        </Container>
      </div>
    </Styles>
  );
};

export default EventsDetails;
