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
import { Container, Row, Col } from "react-bootstrap";
import bg from "../../assets/SchoolBgImage.png";
import schoolVideo from "../../assets/schoolVideo.mp4";
import Infrastructure from "./components/Infrastructure";
import Brouchers from "./components/Brouchers";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import Event from "./components/Event";
import FAQs from "./components/FAQs";

const SchoolPage = () => {
  // const bg =
  //   "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww";

  const eventList = useSelector((state) => state.eventList);
  const { event, error, loading } = eventList;

  return (
    <>
      <HeaderTwo />
      <div className="">
        <div>
          <video
            className="w-100"
            // style={{  }}
            autoPlay
            muted
            loop
          >
            <source src={schoolVideo} type="video/mp4" />
          </video>
        </div>
        <div className="">
          <div>School Name</div>
          <div>School Description</div>
          <div>
            <button>Know More</button>
            <button>Enquire</button>
          </div>
        </div>

        {/* <BannerSection bg_image={bg} title={"Home/SchoolPage"} /> */}

        {/* <ReadMoreSection /> */}
        {/* <Container>
        <div className="d-flex mt-4 gap-4">
          <EventCarousel />
          <EventDetailsData />
        </div>
      </Container> */}
        <Container>
          <div className="mt-5 d-flex justify-content-between gap-5">
            {/* <Col><EventCarousel /></Col> */}
            <div>
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="school"
                className="rounded-4 shadow-sm"
              />
            </div>
            <div>
              <EventDetailsData />
            </div>
          </div>
          <Infrastructure />
          <Brouchers />
          <div className="d-flex gap-4 mb-4 ">
            <Event />
            <Event />
            {/* <SingleEvent /> */}
          </div>
          <FAQs />
        </Container>

        {/* <LetsTakeAdmission /> */}

        {/* <HomeBlog eventListData={eventList} /> */}

        <ContactInfoSection />
      </div>

      <Footer />
    </>
  );
};

export default SchoolPage;
