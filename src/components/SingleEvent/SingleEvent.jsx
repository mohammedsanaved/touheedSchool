import React from "react";
import { SingleEventStyles } from "./SingleEventStyles.js";
import { Link } from "react-router-dom";



const formatDate = (dateString) => {
 
  const date = new Date(dateString);
  
  
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  
  
  const formattedDate = date.toLocaleDateString('en-GB', options);
  
  return formattedDate;
};




const SingleEvent = ({ event }) => {
  const thumbnail = `${process.env.REACT_APP_API_URL}/${event.thumbnail}`;



  const formattedDate = formatDate(event.date);


  return (
    <SingleEventStyles className="w-100">
      <div className="d-flex single-event-div-container justify-content-center w-100">
        <img
          src={thumbnail}
          //   src="../assets/images/SingleEventPlaceholder.png"
          alt={event.title}
          className="thumbnail_img"
        />
        <div className="event-div-container d-flex">
          <div className="first-col">
            <h2 className="single-event-event-title">{event.title}</h2>
            <div className="d-flex event-icons-div align-items-center">
              <img
                src="./assets/images/ion_time-outline.png"
                alt=""
                className="event-time-icon"
              />
              {event.time}
              <img
                src="./assets/images/carbon_location.png"
                alt=""
                className="event-location-icon"
              />
               {event.location}
            </div>
            <p className="single-event-text">{event.desc}</p>
          </div>

          <div className="second-col d-flex flex-column">
            <h2 className="single-event-event-date">{formattedDate}</h2>
            <Link to={`/event-details/${event.id}`}>
              <button className="event-details-btn">DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
    </SingleEventStyles>
  );
};

export default SingleEvent;
