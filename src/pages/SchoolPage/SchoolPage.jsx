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

const SchoolPage = () => {
  // const bg =
  //   "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMGV2ZW50fGVufDB8fDB8fHww";

  const eventList = useSelector((state) => state.eventList);
  const { event, error, loading } = eventList;

  return (
    <>
      <HeaderTwo />

      <BannerSection bg_image={bg} title={"Home/SchoolPage"} />

      {/* <ReadMoreSection /> */}
      {/* <Container>
        <div className="d-flex mt-4 gap-4">
          <EventCarousel />
          <EventDetailsData />
        </div>
      </Container> */}
      <Container>
        <Row className="mt-5 d-flex justify-content-around gap-4">
          <Col>
            <EventCarousel />
          </Col>
          <Col>
            <EventDetailsData />
          </Col>
        </Row>
      </Container>

      <LetsTakeAdmission />

      <HomeBlog eventListData={eventList} />

      <ContactInfoSection />

      <Footer />
    </>
  );
};

export default SchoolPage;
