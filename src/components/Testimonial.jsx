import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Styles } from "./styles/Testimonial";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { testimonialsAction } from "../actions/LandingPageActions";

const Testimonial = () => {
  const dispatch = useDispatch();
  const testimonial = useSelector((state) => state.testimonialList);

  useEffect(() => {
    dispatch(testimonialsAction());
  }, [dispatch]);

  const { testimonials, loading, error } = testimonial;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Styles>
      <Container>
        <div className="testimonialHeader">
          Let's See What Our Valuable Students Think About Us. Their
          Testimonials.
        </div>
        {loading ? (
          <div>Loading</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Swiper
            navigation={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            pagination={true}
            className="mySwiper"
            modules={[Pagination, Navigation, Autoplay]}
          >
            {testimonials?.rows?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="swipper_wrapper">
                  <div className="swipper_msg">
                    <p>{testimonial.description}</p>
                  </div>
                  <div className="swipper_details">
                    <div className="swipper_user">
                      <p className="swipper_name">{testimonial.username}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Styles>
  );
};

export default Testimonial;
