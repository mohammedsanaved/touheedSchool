import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from "./HomeOne";
import About from "./pages/about/About";
import CourseGrid from "./pages/courses/CourseGrid";
import CourseList from "./pages/courses/CourseList";
import CourseDetails from "./pages/courses/CourseDetails";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/events/EventsPage";
import EventDetails from "./pages/events/EventsDetails";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import PageNotFound from "./pages/404/PageNotFound";
import Cart from "./pages/shop/Cart";
import SchoolPage from "./pages/SchoolPage/SchoolPage.jsx";
import "./fonts.css";
import AdmissionPage from "./pages/AdmissionPage/AdmissionPage.jsx";
import SchoolAboutUs from "./pages/SchoolAboutUs/SchoolAboutUs.jsx";
import ContactUsPage2 from "./pages/ContactUsPage2/ContactUsPage2.jsx";
// import ContactInfoSection from "./components/ContactInfoSection/ContactInfoSection.jsx";
import BoardManagement from "./pages/BoardManagement/BoardManagement.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/about" element={<About />} />
        <Route path="/course-grid" element={<CourseGrid />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/schooldetail/:id" element={<SchoolPage />} />
        <Route path="/admission-page/:id" element={<AdmissionPage />} />
        <Route path="/school-about-us/:id" element={<SchoolAboutUs />} />
        <Route path="/contact-us" element={<ContactUsPage2 />} />
        <Route path="/management" element={<BoardManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
