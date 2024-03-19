import React from "react";
import Header from "../../components/Header";
import BannerSection from "../../components/BannerSection/BannerSection";
import { useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs";
import LetsTakeAdmission from "../../components/LetsTakeAdmission/LetsTakeAdmission";
import HomeBlog from "../../components/HomeBlog";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection";
import Footer from "../../components/Footer";

const SchoolPage = () => {
  const eventList = useSelector((state) => state.eventList);
  const { event, error, loading } = eventList;

  return (
    <>
      <Header />

      <BannerSection />

      <AboutUs />

      <LetsTakeAdmission />

      <HomeBlog eventListData={eventList} />
      {/* <ContactInfoSection /> */}
      <Footer />
    </>
  );
};

export default SchoolPage;
