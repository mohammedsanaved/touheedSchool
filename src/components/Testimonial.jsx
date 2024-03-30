// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Styles } from "./styles/Testimonial";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Asif",
      role: "Web Developer",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Saad",
      role: "Web Developer",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Zaki",
      role: "Web Developer",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Ubaid",
      role: "Web Developer",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },
    {
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Aatif",
      role: "Web Developer",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },
    {
      id: 6,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Kaazi",
      role: "Web Developer",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },
    {
      id: 7,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Dahood",
      role: "Cyber",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },
    {
      id: 8,
      imageUrl:
        "https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Author",
      role: "Web Developer",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, qui?",
    },

    // Add more objects as needed
  ];

  return (
    <Styles>
      <Container>
        <div className="testimonialHeader">
          Lets See What Our Valuable Students Think About Us. Their
          Testimonials.
        </div>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          className="mySwiper"
          modules={[Pagination, Navigation, Autoplay]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="swipper_wrapper">
                <div className="swipper_details">
                  <div>
                    <img
                      src={testimonial.imageUrl}
                      className="swipper_img"
                      alt=""
                    />
                  </div>
                  <div className="swipper_user">
                    <p className="swipper_name">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <div className="swipper_msg">
                  <p>{testimonial.message}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Styles>
  );
};

export default Testimonial;
