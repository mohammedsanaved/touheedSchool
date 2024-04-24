import React, { useEffect } from "react";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import SingleEvent from "../../components/SingleEvent/SingleEvent.jsx";
import { EventsStyles } from "./EventsStyles.js";
import HeaderTwo from "../../components/HeaderTwo.js";
import Footer from "../../components/Footer.js";
import SortByEvents from "../../components/SortByEvents.jsx";
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/eventActions.js";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";







const Events = () => {
  const bg =
    "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww";

  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  useEffect(() => {
    dispatch(listEvent());
  }, [dispatch]);
  console.warn(eventList, "eventList");


  

  return (

    <>
      <EventsStyles>
        <HeaderTwo />
        <BannerSection bg_image={bg} title={"Home/Events"} />

        <div className="event-page-div mx-auto">
          <SortByEvents />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            events?.rows?.map((event) => (
              <SingleEvent key={event.id} event={event} />
            ))
          )}
        </div>
      </EventsStyles>
     <FooterNew/>
    </>
  );
};

export default Events;