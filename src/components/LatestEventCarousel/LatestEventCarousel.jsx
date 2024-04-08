import React from 'react';
import { LatestEventsStyle } from './LatestEventCarousel';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import EventCarousel from "../EventCarousel";

const LatestEventCarousel = () => {
  const locationIconUrl = "/assets/images/LatestEventsImg.png";

  return (
    <LatestEventsStyle>
      <div className="latest-events-title">Latest Events</div>
      <Swiper
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="event-carousel-container d-flex mx-auto">
            <img
              src={`${locationIconUrl}`}
              alt=""
              className="latest-event-img"
            />
            {/* <EventCarousel /> */}
            <div className="event-text-sec">
              <h3 className="event-title">
                72nd Independence Day Celebrations at Touheed English Medium
                School
              </h3>
              <p className="event-text">
                Independence Day is a momentous occasion that commemorates the
                triumph of a nation's struggle for freedom and sovereignty. It
                serves as a poignant reminder of the sacrifices made by
                countless individuals who valiantly fought for the right to
                self-governance and the pursuit of liberty. On this day, nations
                come together to celebrate their hard-won independence,
                reflecting upon the arduous journey undertaken to break the
                shackles of colonial rule and assert their own identity.
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis error ut provident vel repellendus nihil atque possimus
                aliquam, mollitia tempora neque voluptate debitis illum
                veniam.Numquam blanditiis dignissimos laboriosam illum ut
                officia
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="event-carousel-container d-flex mx-auto">
            <img
              src={`${locationIconUrl}`}
              alt=""
              className="latest-event-img"
            />
            {/* <EventCarousel /> */}
            <div className="event-text-sec">
              <h3 className="event-title">
                Independence Day is a momentous occasion that commemorates the
                triumph of
              </h3>
              <p className="event-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis error ut provident vel repellendus nihil atque possimus
                aliquam, mollitia tempora neque voluptate debitis illum
                veniam.Numquam blanditiis dignissimos laboriosam illum ut
                officia <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis error ut provident vel repellendus nihil atque possimus
                aliquam, mollitia tempora neque voluptate debitis illum
                veniam.Numquam blanditiis dignissimos laboriosam illum ut
                officia.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </LatestEventsStyle>
  );
};

export default LatestEventCarousel;