import { styled } from "styled-components";
export const Styles = styled.div`
  // body {
  //   background: #eee;
  //   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  //   font-size: 14px;
  //   color: #000;
  //   margin: 0;
  //   padding: 0;
  // }

  // .swiper {
  //   width: 100%;
  //   height: 100%;
  // }
  // .slider-item {
  //   background: #f7f7f7;
  //   padding: 30px 38px;
  //   border-radius: 5px;
  //   height: 220px;
  //   weight: 100%;
  // }
  // .slider-image {
  //   max-width: 65px;
  //   border-radius: 50%;
  //   float: left;
  //   margin-right: 15px;
  // }

  // .swiper-slide {
  //   text-align: center;
  //   font-size: 18px;
  //   background: #fff;

  //   /* Center slide text vertically */
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  // .swiper-slide img {
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }
  /* Import existing styles */
  // @import url("swiper/css");
  // @import url("swiper/css/pagination");
  // @import url("swiper/css/navigation");

  /* New styles for testimonial section */
  .swiper-container {
    width: 100%;
    padding: 20px;
  }
  .testimonialHeader {
    width: 50vw;
    display: flex;
    margin: auto;
    justify-content: center;
    font-size: 36px;
    font-weight: 700;
    color: #000;
    margin-bottom: 16px;
  }

  .swipper_wrapper {
    background-color: #f8f9fa;
    border-radius: 10px;

    padding: 20px;
  }
  .swipper_details {
    display: flex;
    margin-top: 12px;
    margin-bottom: 12px;
    justify-content: center;
    gap: 10px;
  }

  .swipper_msg {
    margin-bottom: 15px;
    margin-top: 12px;
    padding: 34px;
    width: 80%;
    margin: auto;
    background: #eee;
    border-radius: 10px;
    font-size: 28px;
  }

  .swipper_img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .swipper_user {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    & .swipper_name {
      font-size: 22px;
      font-weight: 700;
    }
  }

  /* Customize pagination */
  .swiper-pagination {
    bottom: -4px;
  }

  /* Customize navigation buttons */
  .swiper-button-prev,
  .swiper-button-next {
    background-color: #007bff;
    border-radius: 50%;
    padding: 10px;
    color: #eee;
  }

  // .swiper-button-prev:hover,
  // .swiper-button-next:hover {
  //   // background-color: #0056b3;
  // }
`;
