import React, { useEffect, useState } from "react";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import SingleEvent from "../../components/SingleEvent/SingleEvent.jsx";
import { EventsStyles } from "./EventsStyles.js";
import HeaderTwo from "../../components/HeaderTwo.js";
import Footer from "../../components/Footer.js";
import SortByEvents from "../../components/SortByEvents.jsx";
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/eventActions.js";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Events = () => {
  // const bg =
  ("https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww");

  const bg = "./assets/images/eventspageimage.png";

  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;
  const [id, setId] = useState();

  // useEffect(() => {
  //   dispatch(listEvent());
  // }, [dispatch]);
  console.warn(eventList, "eventList");
  // const dispatch = useDispatch();
  const {
    allschools,
    // loading: schoolLoading,
    // error: errorMsg,
  } = useSelector((state) => state.allSchoolsList);

  useEffect(() => {
    dispatch(listEvent());
    dispatch(allSchoolsListAction());
  }, [dispatch]);

  return (
    <>
      <EventsStyles>
        <HeaderTwo />
        <BannerSection bg_image={bg} title={"Home/Events"} />
        <div className="event-page-div mx-auto w-100">
          <SortByEvents allschools={allschools} setId={setId} />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            events?.rows?.map((event) =>
              // Check if id is set or not to determine whether to display all events or filter by id
              !id || id === event?.school_id ? (
                <SingleEvent key={event.id} event={event} />
              ) : null
            )
          )}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3 gap-3 px-2">
          <button className="pagination-btn">
            <IoIosArrowBack />
            Previous
          </button>
          <div className="h-50 fs-3">
            1 of 5 <span className="fw-bolder">From</span> 40
          </div>
          <button className="pagination-btn">
            Next
            <IoIosArrowForward />
          </button>
        </div>
      </EventsStyles>
      <FooterNew />
    </>
  );
};

export default Events;
