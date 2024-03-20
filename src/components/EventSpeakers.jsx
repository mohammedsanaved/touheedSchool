import React from "react";
import eventSpeaker from "../assets/eventSpeaker.jpg";
import { Styles } from "./styles/EventSpeaker";
import { Row, Col } from "react-bootstrap";
const EventSpeakers = () => {
  return (
    <Styles>
      <div className="eventDetail_main">
        <h2 className="fw-bold d-flex align-content-center justify-content-center mt-4">
          Event Speakers / Guests
        </h2>
        <div className="card-main-div">
          <div className="img-div">
            <img src={eventSpeaker} alt="details" className="speakerImg" />
          </div>
          <div className="speakerDetails">
            <p>AADIL SAID</p>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default EventSpeakers;
