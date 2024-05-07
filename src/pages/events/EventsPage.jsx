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
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";

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


  const [displayCount, setDisplayCount] = useState(4);

 
  const handleLoadMore = () => {
    
    setDisplayCount(prevCount => prevCount + 4);
  };

  return (
    <>
      <EventsStyles>
        
        <HeaderNew2/>
        <BannerSection bg_image={bg} title={"Home/Events"} />
        <div className="event-page-div mx-auto w-100">

        <div className="d-flex w-100 select-div">
          <div className="w-100 select-school-text">Select the School Here : </div>
          <SortByEvents allschools={allschools} setId={setId} />
          </div>
          {loading ? (
  <p>Loading...</p>
) : error ? (
  <p>Error: {error}</p>
) : (
  <>
    {events?.rows
      ?.filter((event) => !id || id === event?.school_id) // Filter events based on selected school ID
      .slice(0, displayCount) // Slice the filtered events
      .map((event) => (
        <SingleEvent key={event.id} event={event} />
      ))}
    {/* Render "Load More" button if there are more events to load */}
    {displayCount < events?.rows?.filter((event) => !id || id === event?.school_id).length && (
      <button onClick={handleLoadMore} className="load-more-btn">Load More</button>
    )}
  </>
)}
        </div>
        
      </EventsStyles>
      <FooterNew />
    </>
  );
};

export default Events;
