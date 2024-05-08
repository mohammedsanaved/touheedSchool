import React, { useEffect, useState } from "react";
import HeaderTwo from "../../components/HeaderTwo";
// import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import AboutUs from "../../components/AboutUs";
import IconBox from "../../components/IconBox";
import TabBox from "./../../components/TabBox";
import TestimonialSlider from "../../components/TestimonialSlider";
import FaqEvent from "../../components/FaqEvent";
import FooterTwo from "../../components/FooterTwo";
import Footer from "../../components/Footer";
import { Styles } from "./styles/about.js";
import BannerSection from "../../components/BannerSection/BannerSection.jsx";
import HeaderNew2 from "../../components/HeaderNew2/HeaderNew2.jsx";
import TabBoxCommon from "./TabBoxCommon.jsx";
import Testimonial from "../../components/Testimonial.jsx";
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../actions/eventActions.js";
import { allSchoolsListAction } from "../../actions/LandingPageActions.js";
import SingleEvent from "../../components/SingleEvent/SingleEvent.jsx";
import FAQs from "../SchoolPage/components/FAQs.jsx";
import FAQItem from "../SchoolPage/components/FAQs/FAQItem.jsx";
import FooterNew from "../../components/FooterNew/FooterNew.jsx";

const About = () => {
  const value = "About US";

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
    setDisplayCount((prevCount) => prevCount + 4);
  };



  const items = [
    {
      title: "What are the school's operating hours?",
      content: "Our school operates from Monday to Friday, with classes starting at 8:00 AM and ending at 3:00 PM.",
    },
    {
      title: "What grades or levels does the school cater to?",
      content: "Our school offers education from pre-kindergarten to grade 12.",
    },
    {
      title: "What is the school's academic curriculum?",
      content: "We follow a comprehensive curriculum that aligns with national standards and emphasizes critical thinking, creativity, and interdisciplinary learning.",
    },
    {
      title: "What extracurricular activities are available for students?",
      content: "We offer a wide range of extracurricular activities, including sports teams, music ensembles, drama clubs, academic competitions, and community service projects.",
    },
    {
      title: "What are the admission requirements and procedures?",
      content: "Our admission process includes submitting an application form, academic transcripts, recommendation letters, and, for some grades, entrance exams. Please visit our admissions page for detailed information.",
    },
  ];



  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper about-page">
        {/* Header 2 */}

        <HeaderNew2 />

        {/* Breadcroumb */}
        {/* <BreadcrumbBox title="About Us" /> */}
        <BannerSection bg_image={bg} />

        {/* About Area */}
        <AboutUs />

        {/* Icon Box Area */}
        {/* <IconBox /> */}

        {/* Tab Section */}

        <TabBoxCommon />

        {/* Testimonial Slider */}
        {/* <TestimonialSlider /> */}

        <Testimonial />

        <div className="EventsHeader">Upcoming Events</div>
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
            {displayCount <
              events?.rows?.filter((event) => !id || id === event?.school_id)
                .length && (
              <button onClick={handleLoadMore} className="load-more-btn">
                Load More
              </button>
            )}
          </>
        )}




        
        


        <div>
      <div className="faq-title">FAQs</div>
      <div className="accordion mt-3 mb-4 mx-auto">
        {items?.map((item, index) => (
          <FAQItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>



        {/* Footer 2 */}
        {/* <FooterTwo /> */}
        
        <FooterNew/>
      </div>
    </Styles>
  );
};

export default About;
