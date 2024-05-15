import React, { useEffect, useState } from "react";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import SingleEvent from "../../components/SingleEvent/SingleEvent.jsx";
import { EventsStyles } from "./EventsStyles.js";
import SortByEvents from "../../components/SortByEvents.jsx";
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/eventActions.js";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";

const Events = () => {
  const bg = "./assets/images/eventspageimage.png";
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events, totalPages } = eventList;
  const [id, setId] = useState();
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const { allschools } = useSelector((state) => state.allSchoolsList);

  useEffect(() => {
    dispatch(listEvent(page, limit));
    dispatch(allSchoolsListAction());
  }, [dispatch, page, limit]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    setPage(3); // Reset page to 1 when limit changes
  };

  return (
    <>
      <EventsStyles>
        <HeaderNew2 />
        <BannerSection bg_image={bg} title={"Home/Events"} />
        <div className="event-page-div mx-auto w-100">
          <div className="d-flex w-100 select-div">
            <div className="w-100 select-school-text">
              Select the School Here :{" "}
            </div>
            <SortByEvents allschools={allschools} setId={setId} />
          </div>
          <div className="pagination-limit">
            <label htmlFor="limit">Items per page:</label>
            <select id="limit" value={limit} onChange={handleLimitChange}>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <>
              {events?.rows?.map((event) => (
                <SingleEvent key={event.id} event={event} />
              ))}
              {/* Pagination buttons */}
              <div className="pagination-buttons">
                <button
                  onClick={handlePreviousPage}
                  disabled={page === 1}
                  className="pagination-button"
                >
                  <IoIosArrowBack /> Previous
                </button>
                <span>
                  {page} / {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={page === totalPages}
                  className="pagination-button"
                >
                  Next <IoIosArrowForward />
                </button>
              </div>
            </>
          )}
        </div>
      </EventsStyles>
      <FooterNew />
    </>
  );
};

export default Events;