import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from "./HomeOne";
// import HomeTwo from "./HomeTwo";
import About from "./pages/about/About";
import CourseGrid from "./pages/courses/CourseGrid";
import CourseList from "./pages/courses/CourseList";
import CourseDetails from "./pages/courses/CourseDetails";
// import Instructor from "./pages/instructor/Instructors";
// import InstructorDetails from "./pages/instructor/InstructorDetails";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/events/EventsPage";
import EventDetails from "./pages/events/EventsDetails";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
// import Contact from "./pages/contact/Contact";
// import Faq from "./pages/faq/Faq";
import PageNotFound from "./pages/404/PageNotFound";
// import ComingSoon from "./pages/comingsoon/ComingSoon";
// import BlogClassic from "./pages/blog/BlogClassic";
// import BlogGrid from "./pages/blog/BlogGrid";
// import BlogDetails from "./pages/blog/BlogDetails";
// import Product from "./pages/shop/Products";
// import ProductDetails from "./pages/shop/ProductDetails";
import Cart from "./pages/shop/Cart";
import SchoolPage from "./pages/SchoolPage/SchoolPage.jsx";
import "./fonts.css"
import AdmissionPage from "./pages/AdmissionPage/AdmissionPage.jsx";
import SchoolAboutUs from "./pages/SchoolAboutUs/SchoolAboutUs.jsx";
// import ContactInfoSection from "./components/ContactInfoSection/ContactInfoSection.jsx";
import ContactUsPage2 from "./pages/ContactUsPage2/ContactUsPage2.jsx";
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
        {/* <Route path="/home-two" element={<HomeTwo />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/course-grid" element={<CourseGrid />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-details" element={<CourseDetails />} />
        {/* <Route path="/management" element={<Instructor />} /> */}
        <Route path="/management" element={<BoardManagement />} />
        {/* <Route path="/instructor-details" element={<InstructorDetails />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/404" element={<PageNotFound />} />
        {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
        {/* <Route path="/blog-classic" element={<BlogClassic />} /> */}
        {/* <Route path="/blog-grid" element={<BlogGrid />} /> */}
        {/* <Route path="/blog-details" element={<BlogDetails />} /> */}
        {/* <Route path="/products" element={<Product />} /> */}
        {/* <Route path="/product-details" element={<ProductDetails />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/schooldetail/:id" element={<SchoolPage />} />
        <Route path="/admission-page/:id" element={<AdmissionPage />} />
        <Route path="/school-about-us/:id" element={<SchoolAboutUs />} />
        <Route path="/contact-us" element={<ContactUsPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
