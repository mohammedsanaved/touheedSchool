import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HeroSlideStyle } from "./styles/HeroSlideStyle";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HeroSlide = () => {
  const imgData = [
    {
      id: "1",
      backgroundImage:
        "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600",
      uniqClass: "slider-box slider-box1",
      title: "Touheed Education Trust - Gangoli",
      desc: "Best School In This Region Join With Us Today",
      btnOneLink: "course-grid",
      btnTwoLink: "contact",
    },
    {
      id: "2",
      backgroundImage:
        "https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=600",
      uniqClass: "slider-box slider-box2 text-right",
      title: "Welcome To Touheed Edu.22222",
      desc: "Best School In This Region Join With Us Today",
      btnOneLink: "course-grid",
      btnTwoLink: "contact",
    },
  ];
  return (
    <>
      <HeroSlideStyle>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {imgData.map((img) => (
            <SwiperSlide>
              <div className="image-container" key={img.id}>
                <img
                  src={img.backgroundImage}
                  className="slider-image"
                  alt={img.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroSlideStyle>
    </>
  );
};
export default HeroSlide;
