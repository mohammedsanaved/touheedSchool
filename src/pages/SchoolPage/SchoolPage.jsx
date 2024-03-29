import React from "react";
import Footer from "../../components/Footer";
import BannerSection from "../../components/BannerSection/BannerSection";
import { useSelector } from "react-redux";
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

const SchoolPage = () => {
  // const bg =
  //   "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww";

  const eventList = useSelector((state) => state.eventList);
  const { event, error, loading } = eventList;

  return (
    <>
      <HeaderTwo />
      <div className="">
        <div className="position-relative"> 
          <video
            className="w-100 video-element"
            // style={{  }}
            autoPlay
            muted
            loop
          >
            <source src={schoolVideo} type="video/mp4" />
          </video>
        
        <div className="video-banner-text mx-auto position-absolute">
          <div className="text-center school-title">School Video</div>
          <div className="text-center school-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.</div>
          <div className="school-buttons d-flex justify-content-center mx-auto">
            <GreenButton  text="Know More" />
            <GreenButton  text="Enquire" />
          </div>
        </div>
        </div>
        <div className="breadcrumbs-div mx-auto">
        <p> <span className="color-purple"> Touheed</span>/ Touheed English medium School</p>
        </div>

        
        
          
              <WhyUs/>
              
            
          <Infrastructure />
          <Brouchers />



          <div className="event-container d-flex mx-auto">
            <Event />
            <Event />
          </div>
          <FAQs />
          <NoticeBoard />
        

       

        <ContactInfoSection />
      </div>

      <Footer />
    </>
  );
};

export default SchoolPage;
