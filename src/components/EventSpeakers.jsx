import React from "react";
import { Styles } from "./styles/EventSpeaker";
import { Row, Col } from "react-bootstrap";

const EventSpeakers = ({ speakers }) => {
  return (
    <Styles>
      <div className="eventDetail_main">
        <h2 className="fw-bold d-flex align-content-center justify-content-center">
          Event Speakers / Guests
        </h2>

        <div className="d-flex justify-content-between">
          {speakers?.map((guest) => (
            <div className="card-main-div" key={guest.id}>
              <div className="img-div">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${guest.image}`}
                  alt={guest.name}
                  className="speakerImg"
                />
              </div>
              <div className="speakerDetails">
                <p className="speaker-name">{guest.name}</p>
                <p className="speaker-details">{guest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
};

export default EventSpeakers;
