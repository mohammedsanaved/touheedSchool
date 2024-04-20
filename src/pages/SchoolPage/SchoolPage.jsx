import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import BannerSection from "../../components/BannerSection/BannerSection";
import { useDispatch, useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs";
import LetsTakeAdmission from "../../components/LetsTakeAdmission/LetsTakeAdmission";
import HomeBlog from "../../components/HomeBlog";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection";
import ReadMoreSection from "../../components/ReadMoreSection";
import HeaderTwo from "../../components/HeaderTwo";
import EventCarousel from "../../components/EventCarousel";
import EventDetailsData from "../../components/EventDetailsData";
import WhyUs from "./components/WhyUs";

import { Container, Row, Col } from "react-bootstrap";
import bg from "../../assets/SchoolBgImage.png";
import schoolVideo from "../../assets/schoolVideo.mp4";
import Infrastructure from "./components/Infrastructure";
import Brouchers from "./components/Brouchers";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import Event from "./components/Event";
import FAQs from "./components/FAQs";
import NoticeBoard from "./components/NoticeBoard";

import "./SchoolPage.css";
import GreenButton from "../../components/GreenButton/GreenButton";
import FooterNew from "../../components/FooterNew/FooterNew";
import { useParams } from "react-router-dom";
import { schoolDetails } from "../../actions/schoolActions";

const SchoolPage = () => {
  // const bg =
  //   "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww";

  const { id } = useParams();
  const dispatch = useDispatch();
  const schoolDetail = useSelector((state) => state.schoolDetails);
  const { loading, school } = schoolDetail;
  console.log(schoolDetail, "schoolDetail");
  useEffect(() => {
    dispatch(schoolDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <HeaderTwo />
      <div className="">
        <div className="position-relative">
          <video className="w-100 video-element" autoPlay muted loop>
            {/* <source src={schoolVideo} type="video/mp4" /> */}
            <source
              src={`${process.env.REACT_APP_API_URL}/${school.video}`}
              type="video/mp4"
            />
          </video>

          <div className="video-banner-text mx-auto position-absolute">
            <div className="text-center school-title">{school.name}</div>
            <div className="text-center school-description">
              {school.description}
            </div>
            <div className="school-buttons d-flex justify-content-center mx-auto">
              <GreenButton text="Know More" />
              <GreenButton text="Enquire" />
            </div>
          </div>
        </div>
        <div className="breadcrumbs-div mx-auto">
          <p>
            <span className="color-purple"> Touheed</span>/ Touheed English
            medium School
          </p>
        </div>

        <WhyUs image={school.image} description={school.summary} />

        <Infrastructure infrastructure={school.infrastructure} />
        {school?.brochure?.map((doc) => (
          <Brouchers doc={doc} key={doc.id} />
        ))}

        <div className="event-container d-flex mx-auto">
          {school?.events?.map((event) => (
            <Event key={event.id} item={event} />
          ))}
        </div>
        <FAQs faqs={school.faq} />
        <NoticeBoard />

        <h3 className="contact-us-title">Contact Us</h3>

        <ContactInfoSection />
      </div>

      <FooterNew />
    </>
  );
};

export default SchoolPage;
