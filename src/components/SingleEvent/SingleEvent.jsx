import React from "react";
import { SingleEventStyles } from "./SingleEventStyles.js";
import { Link } from "react-router-dom";

const SingleEvent = ({ event }) => {
  const thumbnail = `${process.env.REACT_APP_API_URL}/${event.thumbnail}`;
  return (
    <SingleEventStyles>
      <div className="d-flex single-event-div-container justify-content-center">
        <img
          src={thumbnail}
          //   src="../assets/images/SingleEventPlaceholder.png"
          alt={event.event_title}
          className="thumbnail_img"
        />
        <div className="event-div-container d-flex">
          <div className="first-col">
            <h2 className="single-event-event-title">{event.event_title}</h2>
            <div className="d-flex event-icons-div align-items-center">
              <img src="./assets/images/ion_time-outline.png" alt="" />
              &nbsp; {event.event_time}
              <img
                src="./assets/images/carbon_location.png"
                alt=""
                className="event-location-icon"
              />
               {event.event_location}
            </div>
            <p className="single-event-text">{event.event_desc}</p>
          </div>

          <div className="second-col d-flex flex-column">
            <h2 className="single-event-event-date">20 Jan</h2>
            <Link to={`/event-details`}>
              <button className="event-details-btn">DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
    </SingleEventStyles>
  );
};

export default SingleEvent;
