import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

const EventDetailsData = ({ location, time, date, desc, name }) => {
  return (
    <div>
      <h1 className="fs-1 fw-bold">{name}</h1>
      <div className="d-flex gap-4 justify-content-md-start mt-2">
        <div className="d-flex gap-2">
          {" "}
          {/* Apply text-success class for success color */}
          <FaCalendarAlt className="fs-4 fw-semibold text-success" />
          <p className="fs-5">{date}</p>
        </div>
        <div className="d-flex gap-2 ">
          {/* Apply text-success class for success color */}
          <CiClock2 className="fs-4 text-success fw-semibold" />
          <p className="fs-5">{time}</p>
        </div>
        <div className="d-flex">
          <LuMapPin className="fs-4 text-success" />
          <p className="fs-5">{location}</p>
        </div>
      </div>
      <p className="mt-4 fs-4">{desc}</p>
    </div>
  );
};

export default EventDetailsData;
