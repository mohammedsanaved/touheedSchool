import React from "react";
import BannerSection from "../../components/BannerSection/BannerSection";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import { EventsStyles } from "./EventsStyles.js";
import HeaderTwo from "../../components/HeaderTwo.js";
import Footer from "../../components/Footer.js";
import SortByEvents from "../../components/SortByEvents.jsx";
import { useDispatch, useSelector } from "react-redux";

const Events = () => {
  const bg =
    "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww";

  return (
    <>
      <EventsStyles>
        <HeaderTwo />
        <BannerSection bg_image={bg} title={"Home/Events"} />

        <div className="event-page-div mx-auto">
          <SortByEvents />
          <SingleEvent />
          {/* <SingleEvent /> */}

          {/* <SingleEvent /> */}

          {/* <SingleEvent /> */}
        </div>
      </EventsStyles>
      <Footer />
    </>
  );
};

export default Events;
