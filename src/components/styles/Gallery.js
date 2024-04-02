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
    margin-bottom: 16px;
    margin-top: 40px;
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
    @media (max-width: 375px) {
      height: 359px;
      width: 225px;
    }
  }

  .oneofOne1 {
    width: 173px;
    height: 144px;
  }
  .oneofOne2 {
    width: 173px;
    height: 144px;
  }
  .oneofTwo {
    width: 590px;
    heigth: auto;
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
    // width: 300px;
    height: auto;
    border-radius: 10px;
  }
`;
