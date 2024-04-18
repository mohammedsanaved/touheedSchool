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

  const placeholdernUrl = '/assets/images/placeholder-person.jpg';







  return (
    <Styles>

      <div className="testimonialHeader">
        Testimonials


      </div>
      <div className="testimonials-main-div">
        <div className="testimonial-div-for-arrows">

          <div className="what-our-students-say">What our students say about our website</div>


          <div className="testimonial-slider-div">



            {loading ? (
              <div>Loading</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              <Swiper


                // autoplay={{
                //   delay: 7000,
                //   disableOnInteraction: false,
                // }}

                className="mySwiper"
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: '.testimonial-custom-prev',
                  nextEl: '.testimonial-custom-next'
                }}

                breakpoints={{
                  900: {
                    slidesPerView: 2, // When screen width is below 900px, show only one slide per view
                    slidesPerGroup: 2
                  }
                }}



              >



                {testimonials?.rows?.map((testimonial, index) => (
                  <SwiperSlide key={index}>


                    <div className="testimonial-div">
                      <div className="testimonial-pic-name-div d-flex align-items-center">
                        <img className="testimonial-profile-pic" src={`${placeholdernUrl}`} alt="" />
                        <div className="testimonial-username">{testimonial.username}</div>
                      </div>
                      <p className="testimonial-desc">{testimonial.description}</p>
                    </div>
                  </SwiperSlide>
                ))}


              </Swiper>
            )}

          </div>
          <div className="testimonial-custom-prev"></div>
          <div className="testimonial-custom-next"></div>
        </div>
      </div>

    </Styles>
  );
};

export default Testimonial;
