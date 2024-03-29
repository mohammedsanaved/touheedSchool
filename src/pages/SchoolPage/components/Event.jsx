import React from "react";
import { Styles } from "../styles/Event";

const Event = () => {
  return (
    <Styles>
      <div className="d-flex single-event-div-container justify-content-center">
        <img src="../assets/images/SingleEventPlaceholder.png" alt="" className="event-img" />
        <div className="event-div-container d-flex">
          <div className="first-col">
            <div className="d-flex mt-1 gap-4 align-content-center">
              <button className="event-details-btn">12 AUG</button>
              <h2 className="single-event-event-title">
                A session on Career Guidance.
              </h2>
            </div>
            <div className="d-flex event-icons-div align-items-center">
              <img src="./assets/images/ion_time-outline.png" alt="" />
              &nbsp; 7:30
              <img
                src="./assets/images/carbon_location.png"
                alt=""
                className="event-location-icon"
              />
               Gangolli - Karnataka
            </div>
            <p className="single-event-text">
              An exclusive session on Career Guidance, focusing on creating
              awareness and expand horizons for the students.
            </p>
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
