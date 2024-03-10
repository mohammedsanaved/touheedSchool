import React from "react";
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

const About = () => {
  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper about-page">
        {/* Header 2 */}
        <HeaderTwo />

        {/* Breadcroumb */}
        {/* <BreadcrumbBox title="About Us" /> */}
        <div>About Us</div>

        {/* About Area */}
        <AboutUs />

        {/* Icon Box Area */}
        <IconBox />

        {/* Tab Section */}
        <TabBox />

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Faq & Event Area */}
        <FaqEvent />

        {/* Footer 2 */}
        {/* <FooterTwo /> */}
        <Footer />
      </div>
    </Styles>
  );
};

export default About;
