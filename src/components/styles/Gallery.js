import { styled } from "styled-components";

export const Styles = styled.div`
  .gallery_main {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .galleryHeader {
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-weight: 700;
    color: #000;
    margin: auto; /* Center horizontally */
    margin-bottom: 16px;
  }

  .oneofOne_sub {
    gap: 10px;
  }

  .oneofOne {
    width: 359px;
    height: 254px;
  }

  .oneofOne01 {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .oneofOne01 > div {
    width: 50%;
  }

  @media (max-width: 375px) {
    .oneofOne01 {
      flex-direction: column;
      align-items: center;
    }
    .oneofOne01 > div {
      width: auto;
    }
    .galleryHeader {
      font-size: 24px;
      margin-top: 0;
    }
  }

  .oneofOne1,
  .oneofOne2 {
    width: 173px;
    height: 144px;
  }

  .oneofTwo {
    width: 590px;

    height: auto;
  }

  @media (max-width: 600px) {
    .oneofTwo {
      width: 90%;
    }
  }

  .oneofThree1 {
    width: 315px;
    height: 179px;
  }

  .oneofThree2 {
    width: 313px;
    height: 218px;
  }

  img {
    height: auto;
    border-radius: 10px;
    max-width: 100%;
    aspect-ratio: 3/2;
  }
`;
