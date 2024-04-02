import { styled } from "styled-components";

export const HeroSlideStyle = styled.div`
  .image-container {
    width: 100%;
    display: block;
    overflow: hidden;
    position: relative;
    height: 700px;

    // img.slider-image {
    //   // width: auto;
    //   margin-top: 0;
    //   // transition: all 6000ms linear;
    // }

    @media (max-width: 767px) {
      height: 450px;
    }

    @media (max-width: 575px) {
      height: 360px;
    }
  }
  img {
    height: 700px;
    width: 100vw;
    transform: scale(1);
  }
`;
