import React, { useEffect, Component } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import IconBox from "./components/IconBox";
import AboutUs from "./components/AboutUs";
import CourseFilter from "./components/CourseFilter";
import TestimonialSlider from "./components/TestimonialSlider";
import FaqEvent from "./components/FaqEvent";
import TeamSlider from "./components/TeamSlider";
import HelpArea from "./components/HelpArea";
import HomeBlog from "./components/HomeBlog";
import CampusTour from "./components/CampusTour";
import NewsletterForm from "./components/NewsletterForm";
import Footer from "./components/Footer";
import ServiceBox from "./components/ServiceBox";
import AboutUsTwo from "./components/AboutUsTwo";
import CardSection from "./components/cardSection/CardSection";

import Spinner from "react-bootstrap/Spinner";

import { useSelector, useDispatch } from "react-redux";
import { listEvent } from "./actions/eventActions";
import Features from "./components/Features";
import HeaderTwo from "./components/HeaderTwo";
import Testimonial from "./components/Testimonial";
import EventCarousel from "./components/EventCarousel";
import EventsSections from "./components/EventsSection/EventsSections";
import EventSectionCarousel from "./components/EventSectionCarousel";
import Gallery from "./components/Gallery";
// import Cards from "./components/Cards";

export default function HomeOne() {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { event, error, loading } = eventList;

  useEffect(() => {
    dispatch(listEvent());
  }, [dispatch]);

  return (
    <div className="main-wrapper">
      {/* Header */}
      {/* <Header /> */}
      <HeaderTwo />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Icon Box */}
      <IconBox />

      {/* About Area */}
      <AboutUs />

      {/* About Us 2 */}
      {/* <AboutUsTwo /> */}

      {/* CardSection */}
      <CardSection />
      {/* <EventCarousel /> */}
      {/* <EventsSections /> */}
      <EventSectionCarousel />

      {/* Service Box */}
      {/* <ServiceBox /> */}

      {/* Course Filter */}
      {/* < CourseFilter /> */}

      {/* Testimonial Slider */}
      {/* <TestimonialSlider /> */}
      <Testimonial />

      {/* Event / Blog Area */}

      <HomeBlog eventListData={eventList} />

      <Features />
      <Gallery />

      {/* Faq & Event Area */}
      {/* <FaqEvent /> */}

      {/* Team Slider */}
      {/* <TeamSlider /> */}

      {/* Help Area */}
      {/* <HelpArea /> */}

      {/* Campus Tour */}
      {/* <CampusTour /> */}

      {/* Newsletter Form */}
      {/* <NewsletterForm /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
