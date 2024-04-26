import React from "react";
import { Styles } from "../styles/Event";








const Event = ({ item }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = { day: "numeric", month: "long", year: "numeric" };

    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
  };
  const formattedDate = formatDate(item.date);

  const formatTimeTo12Hour = (timeString) => {
    // Parse the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(":");

    // Create a Date object with the provided time
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(parseInt(seconds, 10));

    // Format the time to 12-hour format
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Set to true for 12-hour format
    });

    return formattedTime;
  };

  // Usage example
  // const apiTime = '14:47:11';
  const formattedTime = formatTimeTo12Hour(item.time);
  console.log(formattedTime); // Output: "2:47:11 PM" (for example)

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
            <div className="d-flex mt-1 gap-4 align-content-center title-date">
              <button className="event-details-btn">{formattedDate}</button>
              <h2 className="single-event-event-title">{item.title}</h2>
            </div>
            <div className="d-flex event-icons-div align-items-center">
              <img src="/assets/images/ion_time-outline.png" alt="" />
              &nbsp; {formattedTime}
              <img
                src="/assets/images/carbon_location.png"
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
