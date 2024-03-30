import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import GreenButton from "../../../components/GreenButton/GreenButton";
import '../styles/WhyUs.css';


const EventDetailsData = () => {
  return (
    <div className="d-flex justify-content-between why-us-container mx-auto">

<div>
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="school"
                className="why-us-img"
              />
            </div>

<div>
      <h1 className="why-us-h1">
        Why Us
      </h1>
      
      <p className="why-us-text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum 
      </p>
      <GreenButton text="Read More" class_Name="readmore-btn" />
    </div>
    </div>
  );
};

export default EventDetailsData;
