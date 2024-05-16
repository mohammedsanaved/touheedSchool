import React, { useEffect, useState } from "react";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import SingleEvent from "../../components/SingleEvent/SingleEvent.jsx";
import { EventsStyles } from "./EventsStyles.js";
import SortByEvents from "../../components/SortByEvents.jsx";
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/eventActions.js";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";

const Events = () => {
  const bg = "./assets/images/eventspageimage.png";
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;
  const { allschools } = useSelector((state) => state.allSchoolsList);
  const [selectedSchoolId, setSelectedSchoolId] = useState("");
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(5);

  useEffect(() => {
    dispatch(listEvent());
    dispatch(allSchoolsListAction());
  }, [dispatch]);

  return (
    <>
      <EventsStyles>
        <HeaderNew2 />
        <BannerSection bg_image={bg} title={"Home/Events"} />
        <BreadCrumbs />
        <div className="event-page-div mx-auto w-100">
          <div className="d-flex w-100 select-div">
            <div className="w-100 select-school-text">
              Select the School Here :{" "}
            </div>
            <SortByEvents
              allschools={allschools}
              setSelectedSchoolId={setSelectedSchoolId}
            />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <>
              {events?.rows?.map(
                (event) =>
                  selectedSchoolId === event.id && (
                    <SingleEvent key={event.id} event={event} />
                  )
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
