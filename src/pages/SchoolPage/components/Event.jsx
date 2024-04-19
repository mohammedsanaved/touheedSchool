import React from "react";
import { Styles } from "../styles/Event";

const Event = ({ item }) => {
  return (
    <Styles>
      <div className="d-flex single-event-div-container justify-content-center">
        <img
          src={`${process.env.REACT_APP_API_URL}/${item.thumbnail}`}
          alt=""
          className="event-img"
        />
        <div className="event-div-container d-flex">
          <div className="first-col">
            <div className="d-flex mt-1 gap-4 align-content-center">
              <button className="event-details-btn">{item.date}</button>
              <h2 className="single-event-event-title">{item.title}</h2>
            </div>
            <div className="d-flex event-icons-div align-items-center">
              <img src="./assets/images/ion_time-outline.png" alt="" />
              &nbsp; {item.time}
              <img
                src="./assets/images/carbon_location.png"
                alt=""
                className="event-location-icon"
              />
              {item.location}
            </div>
            <p className="single-event-text">{item.desc}</p>
          </div>

          {/* <div className="second-col d-flex flex-column">
            <h2 className="single-event-event-date">20 Jan</h2>
            <button className="event-details-btn">DETAILS</button>
          </div> */}
        </div>
      </div>
    </Styles>
  );
};

export default Event;
