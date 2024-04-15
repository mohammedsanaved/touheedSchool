import React, { useEffect } from "react";
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
import GreenButton from "./GreenButton/GreenButton";
import { useDispatch, useSelector } from "react-redux";
import { allSchoolsListAction } from "../actions/LandingPageActions";
import { Link } from "react-router-dom";
const HeroSlide = () => {
  const dispatch = useDispatch();
  const {
    allschools,
    loading: schoolLoading,
    error: errorMsg,
  } = useSelector((state) => state.allSchoolsList);

  useEffect(() => {
    dispatch(allSchoolsListAction());
  }, [dispatch]);

  const imgData = [
    {
      id: "1",
      backgroundImage: "../assets/images/LandingPageCaraouselImage1.png",
      uniqClass: "slider-box slider-box1",
      title: "Touheed English Medium School",
      desc: "Touheed English medium School founded in the year 1990 is managed by Touheed Educational Trust (Regd.) Ganguli.",
      btnOneLink: "course-grid",
      btnTwoLink: "contact",
    },
    {
      id: "2",
      backgroundImage: "../assets/images/LandingPageCaraouselImage2.png",
      uniqClass: "slider-box slider-box2 text-right",
      title: "Touheed Girls' P.U.College, Ganguli",
      desc: "Touheed English medium School founded in the year 1990 is managed by Touheed Educational Trust (Regd.) Ganguli.",
      btnOneLink: "course-grid",
      btnTwoLink: "contact",
    },
    {
      id: "3",
      backgroundImage: "../assets/images/LandingPageCaraouselImage3.png",
      uniqClass: "slider-box slider-box2 text-right",
      title: "Touheed Womens College",
      desc: "Touheed English medium School founded in the year 1990 is managed by Touheed Educational Trust (Regd.) Ganguli.",
      btnOneLink: "course-grid",
      btnTwoLink: "contact",
    },
    {
      id: "4",
      backgroundImage: "../assets/images/LandingPageCaraouselImage4.png",
      uniqClass: "slider-box slider-box2 text-right",
      title: "Touheed Public School",
      desc: "'DINA' - School for Special Education & Rehabilitation",
      btnOneLink: "course-grid",
      btnTwoLink: "contact",
    },
    {
      id: "52",
      backgroundImage: "../assets/images/LandingPageCaraouselImage5.png",
      uniqClass: "slider-box slider-box2 text-right",
      title: "'DINA' - School for Special Education & Rehabilitation",
      desc: "Touheed English medium School founded in the year 1990 is managed by Touheed Educational Trust (Regd.) Ganguli.",
      btnOneLink: "course-grid",
      btnTwoLink: "contact",
    },
  ];

  return (
    <>
      <HeroSlideStyle>
        {schoolLoading ? (
          <p>Loading......</p>
        ) : errorMsg ? (
          <p>Error: {errorMsg}</p>
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {allschools?.rows?.map((img) => (
              <SwiperSlide>
                <div
                  className="image-container d-flex align-items-center"
                  key={img.id}
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_API_URL}/${img.image})`,
                  }}
                >
                  <div className="mx-auto">
                    <h1 className="img-title">{img.name}</h1>
                    <p className="img-text mx-auto">{img.description}</p>
                    <div className="school-buttons d-flex justify-content-center mx-auto">
                      <Link to={"/schooldetail"}>
                        <GreenButton text="Know More" />
                      </Link>
                      <GreenButton text="Enquire" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </HeroSlideStyle>
    </>
  );
};
export default HeroSlide;
